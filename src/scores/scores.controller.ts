import { Body, Controller, Delete, Get, NotFoundException, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { CreateScoreDTO } from './dtos/create-score.dto';
import { UpdateScoreDTO } from './dtos/update-score.dto';

@Controller('scores')
export class ScoresController {
    constructor(private scoresService: ScoresService) {}

  @Get('/')
  getAll(): any {
    return this.scoresService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const score = await this.scoresService.getById(id);
    if (!score) throw new NotFoundException('Score not found');
    return score;
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.scoresService.getById(id)))
      throw new NotFoundException('Score not found');
    await this.scoresService.deleteById(id);
    return { success: true };
  }

  @Post('/')
  create(@Body() scoreData: CreateScoreDTO) {
    return this.scoresService.create(scoreData);
  }

  @Put('/:id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() scoreData: UpdateScoreDTO,
  ) {
    if (!(await this.scoresService.getById(id)))
      throw new NotFoundException('Score not found');

    await this.scoresService.updateById(id, scoreData);
    return { success: true };
  }
}
