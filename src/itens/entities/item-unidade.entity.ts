import { ApiProperty } from '@nestjs/swagger';
import { ItemUnidade, Item } from '@prisma/client';
import { ItemEntity } from './item.entity';

export class ItemUnidadeEntity implements ItemUnidade {
  @ApiProperty()
  id: number;

  @ApiProperty({ required: false, nullable: true })
  abreviatura: string | null;

  @ApiProperty({ required: false, nullable: true })
  descricao: string | null;

  @ApiProperty({ type: () => ItemEntity, required: false, nullable: true })
  itens: Item[] | null;
}
