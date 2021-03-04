import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";
import { Lecture } from "./entities/Lecture";
import { LectureTime } from "./entities/LectureTime";
import { Note } from "./entities/Note";
import { Subject } from "./entities/Subject";
import { Teacher } from "./entities/Teacher";
import { User } from "./entities/User";


export default {
    migrations: {
        path: (path.join(__dirname, "./migrations")), 
        pattern: /^[\w-]+\d+\.[tj]s$/,
    }, 
    entities: [Subject, Teacher, Lecture, LectureTime, Note, User], 
    dbName: "unimestreTwo", 
    type: "postgresql", 
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0]; 