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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoresController = void 0;
const common_1 = require("@nestjs/common");
const scores_service_1 = require("./scores.service");
const create_score_dto_1 = require("./dtos/create-score.dto");
const update_score_dto_1 = require("./dtos/update-score.dto");
let ScoresController = class ScoresController {
    constructor(scoresService) {
        this.scoresService = scoresService;
    }
    getAll() {
        return this.scoresService.getAll();
    }
    async getById(id) {
        const score = await this.scoresService.getById(id);
        if (!score)
            throw new common_1.NotFoundException('Score not found');
        return score;
    }
    async deleteById(id) {
        if (!(await this.scoresService.getById(id)))
            throw new common_1.NotFoundException('Score not found');
        await this.scoresService.deleteById(id);
        return { success: true };
    }
    create(scoreData) {
        return this.scoresService.create(scoreData);
    }
    async update(id, scoreData) {
        if (!(await this.scoresService.getById(id)))
            throw new common_1.NotFoundException('Score not found');
        await this.scoresService.updateById(id, scoreData);
        return { success: true };
    }
};
exports.ScoresController = ScoresController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ScoresController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "getById", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "deleteById", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_score_dto_1.CreateScoreDTO]),
    __metadata("design:returntype", void 0)
], ScoresController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_score_dto_1.UpdateScoreDTO]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "update", null);
exports.ScoresController = ScoresController = __decorate([
    (0, common_1.Controller)('scores'),
    __metadata("design:paramtypes", [scores_service_1.ScoresService])
], ScoresController);
//# sourceMappingURL=scores.controller.js.map