"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const constants_1 = require("./constants");
const Lecture_1 = require("./entities/Lecture");
const LectureTime_1 = require("./entities/LectureTime");
const Note_1 = require("./entities/Note");
const Subject_1 = require("./entities/Subject");
const Teacher_1 = require("./entities/Teacher");
const User_1 = require("./entities/User");
exports.default = {
    migrations: {
        path: (path_1.default.join(__dirname, "./migrations")),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Subject_1.Subject, Teacher_1.Teacher, Lecture_1.Lecture, LectureTime_1.LectureTime, Note_1.Note, User_1.User],
    dbName: "unimestreTwo",
    type: "postgresql",
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map