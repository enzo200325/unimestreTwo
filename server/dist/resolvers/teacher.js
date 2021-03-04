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
exports.TeacherResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Subject_1 = require("../entities/Subject");
const Teacher_1 = require("../entities/Teacher");
let TeacherResolver = class TeacherResolver {
    teachers() {
        return Teacher_1.Teacher.find({});
    }
    addTeacher(name, subjectName) {
        return __awaiter(this, void 0, void 0, function* () {
            const subject = yield Subject_1.Subject.findOne({ name: subjectName });
            return Teacher_1.Teacher.create({ name: name, subjectId: subject === null || subject === void 0 ? void 0 : subject.id }).save();
        });
    }
    removeTeacher(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const userToDelete = yield Teacher_1.Teacher.find({ name: name });
            if (!!userToDelete) {
                yield Teacher_1.Teacher.delete({ name: name });
                return `user ${name} deleted with success`;
            }
            return undefined;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Teacher_1.Teacher], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeacherResolver.prototype, "teachers", null);
__decorate([
    type_graphql_1.Mutation(() => Teacher_1.Teacher),
    __param(0, type_graphql_1.Arg("name")),
    __param(1, type_graphql_1.Arg("subjectName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TeacherResolver.prototype, "addTeacher", null);
__decorate([
    type_graphql_1.Mutation(() => String),
    __param(0, type_graphql_1.Arg("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeacherResolver.prototype, "removeTeacher", null);
TeacherResolver = __decorate([
    type_graphql_1.Resolver()
], TeacherResolver);
exports.TeacherResolver = TeacherResolver;
//# sourceMappingURL=teacher.js.map