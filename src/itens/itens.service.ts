import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItensService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(skip: number = 0) {
    return await this.prisma.item.findMany({
      skip,
      take: 50,
    });
  }
}
