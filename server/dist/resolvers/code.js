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
exports.CodeResolver = void 0;
const Code_1 = require("../entities/Code");
const type_graphql_1 = require("type-graphql");
let CodeResolver = class CodeResolver {
    codes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Code_1.Code.find({});
        });
    }
    addCodes(codes) {
        return __awaiter(this, void 0, void 0, function* () {
            let codesCreated = [];
            for (let i = 0; i < codes.length; i++) {
                const newCode = yield Code_1.Code.create({ value: codes[i] }).save();
                codesCreated.push(newCode);
            }
            return codesCreated;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Code_1.Code]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CodeResolver.prototype, "codes", null);
__decorate([
    type_graphql_1.Mutation(() => [Code_1.Code]),
    __param(0, type_graphql_1.Arg("codes", () => [String])),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CodeResolver.prototype, "addCodes", null);
CodeResolver = __decorate([
    type_graphql_1.Resolver()
], CodeResolver);
exports.CodeResolver = CodeResolver;
//# sourceMappingURL=code.js.map