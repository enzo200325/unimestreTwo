import { User } from "../entities/User";
import { Code } from "../entities/Code"; 
import { MyContext } from "src/types";
import { Arg, Ctx, Field, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import argon2 from "argon2"; 

@ObjectType()
class FieldError {
    @Field()
    field: string; 
    @Field()
    message: string;
}

@ObjectType()
class UserResponse {
    @Field(() => [FieldError], {nullable: true})
    errors?: FieldError[]; 

    @Field(() => User, {nullable: true})
    user?: User; 
}


@Resolver() 
export class UserResolver {
    @Query(() => [User])
    users(): Promise<User[]> {
        return User.find({}); 
    }

    // query used to find out if user is logged in or not 
    @Query(() => User, {nullable: true})
    async me(
        @Ctx() { req }: MyContext
    ) {
        if (!req.session.userId) {
            return null
        }
        return await User.findOne({id: req.session.userId}); 
         
    } 

    @Mutation(() => UserResponse)
    // not handling errors yet
    async registerUser(
        @Ctx() { req }: MyContext, 
        @Arg("username") username: string, 
        @Arg("password") password: string, 
        @Arg("name") name: string, 
        @Arg("code") code: string
    ): Promise<UserResponse> {
        if (username.length <= 4) {
            return {
                errors: [
                    {
                        field: "username", 
                        message: "Username deve ter 5 ou mais caracteres",
                    }
                ]
            }
        }
        if (password.length <= 4) {
            return {
                errors: [
                    {
                        field: "password", 
                        message: "A senha deve ter 5 ou mais caracteres",
                    }
                ]
            }
        }
        const hashedPassword = await argon2.hash(password); 

        const getCode = await Code.findOne({value: code});
        if (!getCode) {
            return { 
                errors: [
                    {
                        field: "code", 
                        message: "Este código não pertence a um estudante do Exathum"
                    }
                ]
            }
        }
        
        const user = await User.create({username: username, password: hashedPassword, name: name, code: getCode}).save()
        req.session.userId = user.id; 
        return {user}; 
    }

    @Mutation(() => UserResponse)
    async login(
        @Arg("username") username: string, 
        @Arg("password") password: string, 
        @Ctx() { req }: MyContext
    ): Promise<UserResponse> {
        const user = await User.findOne({username: username}); 
        if (user) {
            const valid = await argon2.verify(user.password, password); 
            if (valid) {
                req.session.userId = user.id; 
                return {user}; 
            } else {
                return {
                    errors: [
                        {
                            field: "password", 
                            message: `Senha incorreta para usuário: ${user.username}`
                        }
                    ]
                }
            }
        } else {
            return {
                errors: [
                    {
                        field: "username", 
                        message: "Este usuário não existe"
                    }
                ]
            }
        }
    }

    @Mutation(() => Boolean)
    async logout(
        @Ctx() { req, res }: MyContext
    ) {
        return new Promise((resolve) => {
        req.session.destroy((err) => {
            res.clearCookie("qid"); 
            if (err) {
                console.log(err); 
                resolve(false)
                return; 
            }
                resolve(true)
        }     
        )
    })
}
} 