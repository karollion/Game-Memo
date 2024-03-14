import { Test, TestingModule } from '@nestjs/testing';
import { ScoresController } from './scores.controller';
import { ScoresService } from './scores.service';
import * as uuid from 'uuid';

describe('ScoresController', () => {
  let controller: ScoresController;
  let service: ScoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScoresController],
      providers: [ScoresService],
    }).compile();

    controller = module.get<ScoresController>(ScoresController);
    service = module.get<ScoresService>(ScoresService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all scores', async () => {
    const winAt = new Date();
    const scores = [{ id: uuid.v4(), points: 100, cards: 32, moves: 48, time: 1500, winAt: winAt, userId: uuid.v4() }];
    jest.spyOn(service, 'getAll').mockResolvedValue(scores);

    expect(await controller.getAll()).toBe(scores);
  });

  it('should return score by id', async () => {
    const scoreId = uuid.v4();
    const winAt = new Date();
    const score = { id: scoreId, points: 100, cards: 32, moves: 48, time: 1500, winAt: winAt, userId: uuid.v4() };
    jest.spyOn(service, 'getById').mockResolvedValue(score);

    expect(await controller.getById(scoreId)).toBe(score);
  });

//   it('should delete score by id', async () => {
//     const scoreId = '1';
//     jest.spyOn(service, 'deleteById').mockResolvedValue({ success: true });

//     expect(await controller.deleteById(scoreId)).toEqual({ success: true });
//   });

//   it('should create a new score', async () => {
//     const scoreData = { points: 100, cards: 5, moves: 10, time: 1000, userId: uuid.v4() };
//     jest.spyOn(service, 'create').mockResolvedValue(scoreData);

//     expect(await controller.create(scoreData)).toEqual(scoreData);
//   });

//   it('should update an existing score', async () => {
//     const scoreId = '1';
//     const updateScoreData = { points: 150, cards: 7, moves: 12, time: 1200, userId: '1' };
//     jest.spyOn(service, 'updateById').mockResolvedValue(updateScoreData);

//     expect(await controller.update(scoreId, updateScoreData)).toEqual({ success: true });
//   });
});