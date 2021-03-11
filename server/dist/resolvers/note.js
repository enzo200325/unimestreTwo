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
exports.NoteResolver = void 0;
const LectureTime_1 = require("../entities/LectureTime");
const Note_1 = require("../entities/Note");
const User_1 = require("../entities/User");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let NoteResolver = class NoteResolver {
    notes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Note_1.Note.find({});
        });
    }
    noteComplete() {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = typeorm_1.getConnection()
                .getRepository(Note_1.Note)
                .createQueryBuilder("n")
                .innerJoinAndSelect("n.lecture", "l", 'l.id = n."lectureId"')
                .innerJoinAndSelect("n.user", "u", 'u.id = n."userId"');
            return yield qb.getMany();
        });
    }
    getNotesFromLecture(lectureId) {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = typeorm_1.getConnection()
                .createQueryBuilder()
                .select("note")
                .from(Note_1.Note, "note")
                .where(`note.lectureId = ${lectureId}`);
            return yield qb.getMany();
        });
    }
    addNote(isImage, link, user, lectureId) {
        return __awaiter(this, void 0, void 0, function* () {
            const noteUser = yield User_1.User.findOne({ username: user });
            const noteLecture = yield LectureTime_1.LectureTime.findOne({ id: lectureId });
            const noteCreated = yield Note_1.Note.create({ isImage: isImage, link: link, userId: noteUser === null || noteUser === void 0 ? void 0 : noteUser.id, lectureId: noteLecture === null || noteLecture === void 0 ? void 0 : noteLecture.id }).save();
            return noteCreated;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Note_1.Note]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoteResolver.prototype, "notes", null);
__decorate([
    type_graphql_1.Query(() => [Note_1.Note]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoteResolver.prototype, "noteComplete", null);
__decorate([
    type_graphql_1.Query(() => [Note_1.Note]),
    __param(0, type_graphql_1.Arg("lectureId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NoteResolver.prototype, "getNotesFromLecture", null);
__decorate([
    type_graphql_1.Mutation(() => Note_1.Note),
    __param(0, type_graphql_1.Arg("isImage")),
    __param(1, type_graphql_1.Arg("link")),
    __param(2, type_graphql_1.Arg("user")),
    __param(3, type_graphql_1.Arg("lectureId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, String, String, Number]),
    __metadata("design:returntype", Promise)
], NoteResolver.prototype, "addNote", null);
NoteResolver = __decorate([
    type_graphql_1.Resolver()
], NoteResolver);
exports.NoteResolver = NoteResolver;
//# sourceMappingURL=note.js.map