import { ConflictException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<User[]> {
    return this.prismaService.user.findMany({
      include: { score: true },
    });
  }

  public getById(id: User['id']): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: { id },
      include: { score: true },
    });
  }

  public async create(userData: Omit<User, 'id'>): Promise<User> {
    try {
      return await this.prismaService.user.create({
        data: userData
      });
    } catch (error) {
      if (error.code === 'P2002')
        throw new ConflictException('Conflict');
      else throw '404 Bad request';
    }
  }
}
