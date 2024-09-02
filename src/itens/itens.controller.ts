import { Controller, Get } from '@nestjs/common';
import { ItensService } from './itens.service';
import { ItemEntity } from './entities/item.entity';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('itens')
export class ItensController {
  constructor(private readonly itensService: ItensService) {}

  @Get('itens_lista')
  @ApiOkResponse({ type: [ItemEntity] })
  async findAll() {
    return await this.itensService.findAll();
  }
}
