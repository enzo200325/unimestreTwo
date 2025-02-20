"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const User_1 = require("../entities/User");
const Code_1 = require("../entities/Code");
const type_graphql_1 = require("type-graphql");
const argon2_1 = __importDefault(require("argon2"));
let FieldError = class FieldError {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FieldError.prototype, "field", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    type_graphql_1.ObjectType()
], FieldError);
let UserResponse = class UserResponse {
};
__decorate([
    type_graphql_1.Field(() => [FieldError], { nullable: true }),
    __metadata("design:type", Array)
], UserResponse.prototype, "errors", void 0);
__decorate([
    type_graphql_1.Field(() => User_1.User, { nullable: true }),
    __metadata("design:type", User_1.User)
], UserResponse.prototype, "user", void 0);
UserResponse = __decorate([
    type_graphql_1.ObjectType()
], UserResponse);
let UserResolver = class UserResolver {
    users() {
        return User_1.User.find({});
    }
    me({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.session.userId) {
                return null;
            }
            return yield User_1.User.findOne({ id: req.session.userId });
        });
    }
    registerUser({ req }, username, password, name, code) {
        return __awaiter(this, void 0, void 0, function* () {
            if (username.length <= 4) {
                return {
                    errors: [
                        {
                            field: "username",
                            message: "Username deve ter 5 ou mais caracteres",
                        }
                    ]
                };
            }
            if (password.length <= 4) {
                return {
                    errors: [
                        {
                            field: "password",
                            message: "A senha deve ter 5 ou mais caracteres",
                        }
                    ]
                };
            }
            const hashedPassword = yield argon2_1.default.hash(password);
            const getCode = yield Code_1.Code.findOne({ value: code });
            if (!getCode) {
                return {
                    errors: [
                        {
                            field: "code",
                            message: "Este código não pertence a um estudante do Exathum"
                        }
                    ]
                };
            }
            const user = yield User_1.User.create({ username: username, password: hashedPassword, name: name, code: getCode }).save();
            req.session.userId = user.id;
            return { user };
        });
    }
    login(username, password, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ username: username });
            if (user) {
                const valid = yield argon2_1.default.verify(user.password, password);
                if (valid) {
                    req.session.userId = user.id;
                    return { user };
                }
                else {
                    return {
                        errors: [
                            {
                                field: "password",
                                message: `Senha incorreta para usuário: ${user.username}`
                            }
                        ]
                    };
                }
            }
            else {
                return {
                    errors: [
                        {
                            field: "username",
                            message: "Este usuário não existe"
                        }
                    ]
                };
            }
        });
    }
    logout({ req, res }) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                req.session.destroy((err) => {
                    res.clearCookie("qid");
                    if (err) {
                        console.log(err);
                        resolve(false);
                        return;
                    }
                    resolve(true);
                });
            });
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [User_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    type_graphql_1.Query(() => User_1.User, { nullable: true }),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "me", null);
__decorate([
    type_graphql_1.Mutation(() => UserResponse),
    __param(0, type_graphql_1.Ctx()),
    __param(1, type_graphql_1.Arg("username")),
    __param(2, type_graphql_1.Arg("password")),
    __param(3, type_graphql_1.Arg("name")),
    __param(4, type_graphql_1.Arg("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "registerUser", null);
__decorate([
    type_graphql_1.Mutation(() => UserResponse),
    __param(0, type_graphql_1.Arg("username")),
    __param(1, type_graphql_1.Arg("password")),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "logout", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.js.map