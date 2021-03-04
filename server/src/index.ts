import "reflect-metadata"; 
import express from "express"; 
import session from "express-session"; 
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user";
import MongoStore from "connect-mongo"; 
import { __prod__ } from "./constants";
import cors from "cors";
import { TeacherResolver } from "./resolvers/teacher";
import { SubjectResolver } from "./resolvers/subject";
import { LectureTimeResolver } from "./resolvers/lectureTime";
import { createConnection} from "typeorm";
import { User } from "./entities/User";
import { Teacher } from "./entities/Teacher";
import { Lecture } from "./entities/Lecture";
import { LectureTime } from "./entities/LectureTime";
import { Note } from "./entities/Note";
import { Subject } from "./entities/Subject";
import { Code } from "./entities/Code";
import { CodeResolver } from "./resolvers/code";

const main = async () => {
    const connection = await createConnection({
        type: "postgres",
        username: "postgres",
        password: "postgres",
        database: "unimestreTwo2", 
        logging: true, 
        synchronize: true,
        entities: [User, Code, Teacher, Lecture, LectureTime, Note, Subject]
    });

    const app = express(); 

    app.use(cors({
        origin: "http://localhost:3000", 
        credentials: true,
    }))

    app.use(
        session({
            name: "qid",  
            store: MongoStore.create({
                mongoUrl: "mongodb://unimestreTwo_admin:iwpgBCEXZYnldaWT@localhost:27017/unimestreTwo", 
                collectionName: "session"
            }),
            secret: "hsdkfljghsdlkjfgh3957ghsdkrjhg390", 
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
                httpOnly: true, 
                sameSite: 'lax', // csrf
                secure: !!__prod__ // cookie only works in https
            }
        })
    )

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver, SubjectResolver, TeacherResolver, LectureTimeResolver, CodeResolver], 
            validate: false,
        }), 
        context: ({req, res}) => ({req, res })
        
    })
    apolloServer.applyMiddleware({app, cors: false})

    app.listen(5000, () => console.log("server started on port 5000"))
}; 

main(); 