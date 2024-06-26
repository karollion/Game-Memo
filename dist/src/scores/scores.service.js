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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoresService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ScoresService = class ScoresService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getAll() {
        return this.prismaService.score.findMany({
            include: { user: true },
        });
    }
    getById(id) {
        return this.prismaService.score.findUnique({
            where: { id },
            include: { user: true },
        });
    }
    deleteById(id) {
        return this.prismaService.score.delete({
            where: { id },
        });
    }
    async create(scoreData) {
        const { userId } = scoreData, otherData = __rest(scoreData, ["userId"]);
        try {
            return await this.prismaService.score.create({
                data: Object.assign(Object.assign({}, otherData), { user: {
                        connect: { id: userId },
                    } }),
            });
        }
        catch (error) {
            if (error.code === 'P2002')
                throw new common_1.ConflictException('Conflict');
            else
                throw '404 Bad request';
        }
    }
    async updateById(id, scoreData) {
        const { userId } = scoreData, otherData = __rest(scoreData, ["userId"]);
        try {
            return this.prismaService.score.update({
                where: { id },
                data: Object.assign(Object.assign({}, otherData), { user: {
                        connect: { id: userId },
                    } }),
            });
        }
        catch (error) {
            if (error.code === 'P2002')
                throw new common_1.ConflictException('Conflict');
            else
                throw '404 Bad request';
        }
    }
};
exports.ScoresService = ScoresService;
exports.ScoresService = ScoresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ScoresService);
//# sourceMappingURL=scores.service.js.map