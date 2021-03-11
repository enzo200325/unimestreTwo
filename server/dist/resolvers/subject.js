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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectResolver = void 0;
const Subject_1 = require("../entities/Subject");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Teacher_1 = require("../entities/Teacher");
const LectureTime_1 = require("../entities/LectureTime");
const Note_1 = require("../entities/Note");
let response = class response {
};
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], response.prototype, "teacher", void 0);
__decorate([
    type_graphql_1.Field(() => [LectureTime_1.LectureTime]),
    __metadata("design:type", Array)
], response.prototype, "lectures", void 0);
response = __decorate([
    type_graphql_1.ObjectType()
], response);
let SubjectResolver = class SubjectResolver {
    subjects() {
        return Subject_1.Subject.find({});
    }
    getTeacherFromSubjectName(subjectName) {
        return __awaiter(this, void 0, void 0, function* () {
            const subject = yield Subject_1.Subject.findOne({ name: subjectName });
            const subjectId = subject === null || subject === void 0 ? void 0 : subject.id;
            let responseArray = [];
            const qb = yield typeorm_1.getConnection()
                .createQueryBuilder()
                .select("teacher")
                .from(Teacher_1.Teacher, "teacher")
                .where(`teacher.subjectId = ${subjectId}`)
                .getMany();
            const promises = qb.map((teacher) => __awaiter(this, void 0, void 0, function* () {
                const qb = yield typeorm_1.getConnection()
                    .createQueryBuilder()
                    .select("lectureTime")
                    .from(LectureTime_1.LectureTime, "lectureTime")
                    .where(`lectureTime.teacherId = ${teacher.id}`)
                    .getMany();
                const promises = qb.map((lecture) => __awaiter(this, void 0, void 0, function* () {
                    const notes = yield typeorm_1.getConnection()
                        .createQueryBuilder()
                        .select("note")
                        .from(Note_1.Note, "note")
                        .where(`note.lectureId = ${lecture.id}`)
                        .getMany();
                    lecture.notes = notes;
                }));
                yield Promise.all(promises);
                responseArray.push({
                    teacher: teacher === null || teacher === void 0 ? void 0 : teacher.name,
                    lectures: qb,
                });
            }));
            yield Promise.all(promises);
            return responseArray;
        });
    }
    addSubject(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Subject_1.Subject.create({ name: name }).save();
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Subject_1.Subject]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubjectResolver.prototype, "subjects", null);
__decorate([
    type_graphql_1.Query(() => [response]),
    __param(0, type_graphql_1.Arg("subjectName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubjectResolver.prototype, "getTeacherFromSubjectName", null);
__decorate([
    type_graphql_1.Mutation(() => Subject_1.Subject),
    __param(0, type_graphql_1.Arg("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubjectResolver.prototype, "addSubject", null);
SubjectResolver = __decorate([
    type_graphql_1.Resolver()
], SubjectResolver);
exports.SubjectResolver = SubjectResolver;
//# sourceMappingURL=subject.js.map