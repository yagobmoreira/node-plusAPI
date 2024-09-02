import { ApiProperty } from '@nestjs/swagger';
import { ItemCategoria, Item } from '@prisma/client';
import { ItemEntity } from './item.entity';

export class ItemCategoriaEntity implements ItemCategoria {
  @ApiProperty()
  id: number;

  @ApiProperty({ required: false, nullable: true })
  descricao: string | null;

  @ApiProperty({ type: () => ItemEntity, required: false, nullable: true })
  itens: Item[] | null;
}
