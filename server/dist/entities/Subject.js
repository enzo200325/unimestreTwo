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
exports.Subject = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Teacher_1 = require("./Teacher");
let Subject = class Subject extends typeorm_1.BaseEntity {
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
], Subject.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    typeorm_1.Column("date"),
    __metadata("design:type", Date)
], Subject.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    typeorm_1.Column({ type: "date" }),
    __metadata("design:type", Date)
], Subject.prototype, "updatedAt", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], Subject.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => [Teacher_1.Teacher]),
    typeorm_1.OneToMany(() => Teacher_1.Teacher, teacher => teacher.subject),
    __metadata("design:type", Array)
], Subject.prototype, "teachers", void 0);
Subject = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Subject);
exports.Subject = Subject;
//# sourceMappingURL=Subject.js.map