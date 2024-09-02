import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PessoaEntity } from './entities/pessoa.entity';

@Injectable()
export class PessoasService {
  constructor(private prisma: PrismaService) {}

  findAll(skip: number = 0): Promise<PessoaEntity[]> {
    return this.prisma.pessoa.findMany({
      skip,
      take: 50,
    });
  }
}
