import { ApiProperty } from '@nestjs/swagger';
import {
  Item,
  ItemCategoria,
  ItemTipo,
  ItemUnidade,
  Prisma,
} from '@prisma/client';
import { ItemCategoriaEntity } from './item-categoria.entity';
import { ItemTipoEntity } from './item-tipo.entity';
import { ItemUnidadeEntity } from './item-unidade.entity';

export class ItemEntity implements Item {
  @ApiProperty()
  id: number;

  @ApiProperty({ required: false, nullable: true, maxLength: 11 })
  cod_ncm: string | null;

  @ApiProperty({ required: false, nullable: true })
  descricao: string | null;

  @ApiProperty({
    required: false,
    nullable: true,
    type: 'number',
    format: 'decimal',
  })
  aliq_cofins: Prisma.Decimal | null;

  @ApiProperty({ required: false, nullable: true })
  aliq_icms: string | null;

  @ApiProperty({
    required: false,
    nullable: true,
    type: 'number',
    format: 'decimal',
  })
  aliq_pis: Prisma.Decimal | null;

  @ApiProperty({ required: false, nullable: true })
  aplicacao: string | null;

  @ApiProperty()
  ativo: boolean;

  @ApiProperty({ required: false, nullable: true })
  cest: number | null;

  @ApiProperty({ required: false, nullable: true })
  cod_barras: string | null;

  @ApiProperty({ required: false, nullable: true })
  cod_interno: string | null;

  @ApiProperty({ required: false, nullable: true })
  cod_item: number | null;

  @ApiProperty({ required: false, nullable: true })
  cst_pis_cofins: string | null;

  @ApiProperty({ required: false, nullable: true })
  descricao_pdv: string | null;

  @ApiProperty({ required: false, nullable: true })
  item_estoque: number | null;

  @ApiProperty({ required: false, nullable: true })
  exige_num_serie: boolean | null;

  @ApiProperty({
    required: false,
    nullable: true,
    type: 'number',
    format: 'decimal',
  })
  fator_conv_unid: Prisma.Decimal | null;

  @ApiProperty({ required: false, nullable: true })
  grade: number | null;

  @ApiProperty({ required: false, nullable: true })
  id_categoria: number | null;

  @ApiProperty({ required: false, nullable: true })
  id_empresa: number | null;

  @ApiProperty({ required: false, nullable: true })
  id_preco: number | null;

  @ApiProperty({ required: false, nullable: true })
  id_tipo: number | null;

  @ApiProperty({ required: false, nullable: true })
  id_unidade: number | null;

  @ApiProperty({ required: false, nullable: true })
  id_unidade_frag: number | null;

  @ApiProperty({ required: false, nullable: true })
  inativo: string | null;

  @ApiProperty({ required: false, nullable: true })
  origem_mercadoria: string | null;

  @ApiProperty({ required: false, nullable: true })
  ref: string | null;

  @ApiProperty({ required: false, nullable: true })
  tipo_tributacao: string | null;

  @ApiProperty({
    required: false,
    nullable: true,
    type: 'number',
    format: 'decimal',
  })
  custo_atual: Prisma.Decimal | null;

  @ApiProperty({
    required: false,
    nullable: true,
    type: 'number',
    format: 'decimal',
  })
  margem: Prisma.Decimal | null;

  @ApiProperty({
    required: false,
    nullable: true,
    type: 'number',
    format: 'decimal',
  })
  preco_venda: Prisma.Decimal | null;

  @ApiProperty({ required: false, nullable: true })
  status_cod_ncm: string | null;

  @ApiProperty({ required: false, nullable: true })
  ncm: number | null;

  @ApiProperty({
    type: () => ItemCategoriaEntity,
    required: false,
    nullable: true,
  })
  categoria: ItemCategoria | null;

  @ApiProperty({ type: () => ItemTipoEntity, required: false, nullable: true })
  itemTipo: ItemTipo | null;

  @ApiProperty({
    type: () => ItemUnidadeEntity,
    required: false,
    nullable: true,
  })
  itemUnidade: ItemUnidade | null;
}
