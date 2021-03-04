"use strict";
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
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const user_1 = require("./resolvers/user");
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const constants_1 = require("./constants");
const cors_1 = __importDefault(require("cors"));
const teacher_1 = require("./resolvers/teacher");
const subject_1 = require("./resolvers/subject");
const lectureTime_1 = require("./resolvers/lectureTime");
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const Teacher_1 = require("./entities/Teacher");
const Lecture_1 = require("./entities/Lecture");
const LectureTime_1 = require("./entities/LectureTime");
const Note_1 = require("./entities/Note");
const Subject_1 = require("./entities/Subject");
const Code_1 = require("./entities/Code");
const code_1 = require("./resolvers/code");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield typeorm_1.createConnection({
        type: "postgres",
        username: "postgres",
        password: "postgres",
        database: "unimestreTwo2",
        logging: true,
        synchronize: true,
        entities: [User_1.User, Code_1.Code, Teacher_1.Teacher, Lecture_1.Lecture, LectureTime_1.LectureTime, Note_1.Note, Subject_1.Subject]
    });
    const app = express_1.default();
    app.use(cors_1.default({
        origin: "http://localhost:3000",
        credentials: true,
    }));
    app.use(express_session_1.default({
        name: "qid",
        store: connect_mongo_1.default.create({
            mongoUrl: "mongodb://unimestreTwo_admin:iwpgBCEXZYnldaWT@localhost:27017/unimestreTwo",
            collectionName: "session"
        }),
        secret: "hsdkfljghsdlkjfgh3957ghsdkrjhg390",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
            httpOnly: true,
            sameSite: 'lax',
            secure: !!constants_1.__prod__
        }
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield type_graphql_1.buildSchema({
            resolvers: [user_1.UserResolver, subject_1.SubjectResolver, teacher_1.TeacherResolver, lectureTime_1.LectureTimeResolver, code_1.CodeResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res })
    });
    apolloServer.applyMiddleware({ app, cors: false });
    app.listen(5000, () => console.log("server started on port 5000"));
});
main();
//# sourceMappingURL=index.js.map