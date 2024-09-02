import { Controller, Get } from '@nestjs/common';
import { PessoasService } from './pessoas.service';

@Controller('pessoas')
export class PessoasController {
  constructor(private readonly pessoasService: PessoasService) {}

  @Get()
  findAll() {
    return this.pessoasService.findAll();
  }
}
