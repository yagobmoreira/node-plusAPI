import { Controller, Get } from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { PessoaEntity } from './entities/pessoa.entity';

@Controller('pessoas')
export class PessoasController {
  constructor(private readonly pessoasService: PessoasService) {}

  @Get('cliente_lista')
  @ApiOkResponse({ type: [PessoaEntity] })
  findAll() {
    return this.pessoasService.findAll();
  }
}
