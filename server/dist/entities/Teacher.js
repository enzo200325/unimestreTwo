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
exports.Teacher = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const LectureTime_1 = require("./LectureTime");
const Subject_1 = require("./Subject");
let Teacher = class Teacher extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
__decorate([
    type_graphql_1.Field(() => Number),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Teacher.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Teacher.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Teacher.prototype, "updatedAt", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Teacher.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => [LectureTime_1.LectureTime]),
    typeorm_1.OneToMany(() => LectureTime_1.LectureTime, lectureTime => lectureTime.teacher),
    __metadata("design:type", Array)
], Teacher.prototype, "lectureTimes", void 0);
__decorate([
    type_graphql_1.Field(() => Subject_1.Subject),
    typeorm_1.ManyToOne(() => Subject_1.Subject, subject => subject.teachers),
    __metadata("design:type", Subject_1.Subject)
], Teacher.prototype, "subject", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Teacher.prototype, "subjectId", void 0);
Teacher = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Teacher);
exports.Teacher = Teacher;
//# sourceMappingURL=Teacher.js.map