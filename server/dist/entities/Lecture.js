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
exports.Lecture = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Note_1 = require("./Note");
const Teacher_1 = require("./Teacher");
let Lecture = class Lecture {
};
__decorate([
    type_graphql_1.Field(() => Number),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Lecture.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Lecture.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Lecture.prototype, "updatedAt", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(() => String),
    __metadata("design:type", String)
], Lecture.prototype, "date", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(() => String),
    __metadata("design:type", String)
], Lecture.prototype, "content", void 0);
__decorate([
    typeorm_1.OneToMany(() => Note_1.Note, note => note.lecture),
    __metadata("design:type", Array)
], Lecture.prototype, "notes", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Teacher_1.Teacher, teacher => teacher.lectures),
    __metadata("design:type", Teacher_1.Teacher)
], Lecture.prototype, "teacher", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Lecture.prototype, "teacherId", void 0);
Lecture = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Lecture);
exports.Lecture = Lecture;
//# sourceMappingURL=Lecture.js.map