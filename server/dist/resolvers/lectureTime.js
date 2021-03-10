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
exports.LectureTimeResolver = void 0;
const LectureTime_1 = require("../entities/LectureTime");
const Teacher_1 = require("../entities/Teacher");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let LectureTimeResolver = class LectureTimeResolver {
    lectureTimes() {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = typeorm_1.getConnection()
                .getRepository(LectureTime_1.LectureTime)
                .createQueryBuilder("lt")
                .innerJoinAndSelect("lt.teacher", "t", 't.id = lt."teacherId"');
            return yield qb.getMany();
        });
    }
    addLectureTime(day, time, teacherName) {
        return __awaiter(this, void 0, void 0, function* () {
            const teacher = yield Teacher_1.Teacher.findOne({ name: teacherName });
            return LectureTime_1.LectureTime.create({ day: day, time: time, teacherId: teacher === null || teacher === void 0 ? void 0 : teacher.id }).save();
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [LectureTime_1.LectureTime]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LectureTimeResolver.prototype, "lectureTimes", null);
__decorate([
    type_graphql_1.Mutation(() => LectureTime_1.LectureTime),
    __param(0, type_graphql_1.Arg("day")),
    __param(1, type_graphql_1.Arg("time")),
    __param(2, type_graphql_1.Arg("teacherName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], LectureTimeResolver.prototype, "addLectureTime", null);
LectureTimeResolver = __decorate([
    type_graphql_1.Resolver()
], LectureTimeResolver);
exports.LectureTimeResolver = LectureTimeResolver;
//# sourceMappingURL=lectureTime.js.map