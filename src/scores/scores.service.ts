import { ConflictException, Injectable } from '@nestjs/common';
import { Score } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ScoresService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Score[]> {
    return this.prismaService.score.findMany({
      include: { user: true },
    });
  }

  public getById(id: Score['id']): Promise<Score | null> {
    return this.prismaService.score.findUnique({
      where: { id },
      include: { user: true },
    });
  }

  public deleteById(id: Score['id']): Promise<Score> {
    return this.prismaService.score.delete({
      where: { id },
    });
  }

  public async create(scoreData: Omit<Score, 'id' | 'winAt'>): Promise<Score> {
    const { userId, ...otherData } = scoreData;
    try {
      return await this.prismaService.score.create({
        data: {
          ...otherData,
          user: {
            connect: { id: userId },
          },
        },
      });
    } catch (error) {
      if (error.code === 'P2002')
        throw new ConflictException('Conflict');
      else throw '404 Bad request';
    }
  
  }

  public async updateById(
    id: Score['id'],
    scoreData: Omit<Score, 'id' | 'winAt'>,
  ): Promise<Score> {
    const { userId, ...otherData } = scoreData;
    try {
      return this.prismaService.score.update({
        where: { id },
        data: {
          ...otherData,
          user: {
            connect: { id: userId },
          },
        },
      });
    } catch (error) {
      if (error.code === 'P2002')
        throw new ConflictException('Conflict');
      else throw '404 Bad request';
    }
  }
}
