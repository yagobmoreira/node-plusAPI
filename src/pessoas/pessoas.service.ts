import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PessoaEntity } from './entities/pessoa.entity';

@Injectable()
export class PessoasService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(skip: number = 0): Promise<PessoaEntity[]> {
    const pessoas = await this.prisma.pessoa.findMany({
      skip,
      take: 50,
    });

    return pessoas.map((pessoa) => new PessoaEntity(pessoa));
  }
}
