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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const LectureTime_1 = require("./LectureTime");
const User_1 = require("./User");
let Note = class Note extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => Number),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Note.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Note.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Note.prototype, "updatedAt", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    typeorm_1.Column({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Note.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(() => Boolean),
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Note.prototype, "isImage", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    typeorm_1.Column({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Note.prototype, "link", void 0);
__decorate([
    type_graphql_1.Field(() => User_1.User),
    typeorm_1.ManyToOne(() => User_1.User, user => user.notes),
    __metadata("design:type", User_1.User)
], Note.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Note.prototype, "userId", void 0);
__decorate([
    type_graphql_1.Field(() => LectureTime_1.LectureTime),
    typeorm_1.ManyToOne(() => LectureTime_1.LectureTime, lecture => lecture.notes),
    __metadata("design:type", LectureTime_1.LectureTime)
], Note.prototype, "lecture", void 0);
__decorate([
    type_graphql_1.Field(() => Number),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Note.prototype, "lectureId", void 0);
Note = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Note);
exports.Note = Note;
//# sourceMappingURL=Note.js.map