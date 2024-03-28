"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoresModule = void 0;
const common_1 = require("@nestjs/common");
const scores_controller_1 = require("./scores.controller");
const scores_service_1 = require("./scores.service");
const prisma_service_1 = require("../prisma/prisma.service");
let ScoresModule = class ScoresModule {
};
exports.ScoresModule = ScoresModule;
exports.ScoresModule = ScoresModule = __decorate([
    (0, common_1.Module)({
        controllers: [scores_controller_1.ScoresController],
        providers: [scores_service_1.ScoresService, prisma_service_1.PrismaService]
    })
], ScoresModule);
//# sourceMappingURL=scores.module.js.map