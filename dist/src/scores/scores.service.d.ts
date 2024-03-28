import { Score } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ScoresService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Score[]>;
    getById(id: Score['id']): Promise<Score | null>;
    deleteById(id: Score['id']): Promise<Score>;
    create(scoreData: Omit<Score, 'id' | 'winAt'>): Promise<Score>;
    updateById(id: Score['id'], scoreData: Omit<Score, 'id' | 'winAt'>): Promise<Score>;
}
