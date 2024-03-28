import { ScoresService } from './scores.service';
import { CreateScoreDTO } from './dtos/create-score.dto';
import { UpdateScoreDTO } from './dtos/update-score.dto';
export declare class ScoresController {
    private scoresService;
    constructor(scoresService: ScoresService);
    getAll(): any;
    getById(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        points: number;
        cards: number;
        moves: number;
        time: number;
        winAt: Date;
        userId: string;
    }, unknown> & {}>;
    deleteById(id: string): Promise<{
        success: boolean;
    }>;
    create(scoreData: CreateScoreDTO): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        points: number;
        cards: number;
        moves: number;
        time: number;
        winAt: Date;
        userId: string;
    }, unknown> & {}>;
    update(id: string, scoreData: UpdateScoreDTO): Promise<{
        success: boolean;
    }>;
}
