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
exports.LectureTime = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Note_1 = require("./Note");
const Teacher_1 = require("./Teacher");
let LectureTime = class LectureTime extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], LectureTime.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], LectureTime.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], LectureTime.prototype, "updatedAt", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], LectureTime.prototype, "month", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], LectureTime.prototype, "day", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], LectureTime.prototype, "weekDay", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], LectureTime.prototype, "time", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], LectureTime.prototype, "about", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], LectureTime.prototype, "link", void 0);
__decorate([
    type_graphql_1.Field(() => Number),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], LectureTime.prototype, "teacherId", void 0);
__decorate([
    type_graphql_1.Field(() => Teacher_1.Teacher),
    typeorm_1.ManyToOne(() => Teacher_1.Teacher, teacher => teacher.lectureTimes),
    __metadata("design:type", Teacher_1.Teacher)
], LectureTime.prototype, "teacher", void 0);
__decorate([
    type_graphql_1.Field(() => [Note_1.Note], { nullable: true }),
    typeorm_1.OneToMany(() => Note_1.Note, note => note.lecture),
    __metadata("design:type", Array)
], LectureTime.prototype, "notes", void 0);
LectureTime = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], LectureTime);
exports.LectureTime = LectureTime;
//# sourceMappingURL=LectureTime.js.map