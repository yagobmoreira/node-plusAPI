import { ApiProperty } from '@nestjs/swagger';
import { Item, ItemTipo } from '@prisma/client';
import { ItemEntity } from './item.entity';

export class ItemTipoEntity implements ItemTipo {
  @ApiProperty()
  id: number;

  @ApiProperty({ required: false, nullable: true })
  descricao: string | null;

  @ApiProperty({ required: false, nullable: true, maxLength: 2 })
  cod: string | null;

  @ApiProperty({ type: () => ItemEntity, required: false, nullable: true })
  itens: Item[] | null;
}
