import { ApiProperty } from '@nestjs/swagger';
import { Pessoa, Prisma } from '@prisma/client';

export class PessoaEntity implements Pessoa {
  @ApiProperty()
  id: number;

  @ApiProperty({ maxLength: 31 })
  DTYPE: string;

  @ApiProperty({ required: false, nullable: true })
  id_empresa: number | null;

  @ApiProperty({ required: false, nullable: true })
  cnpj: string | null;

  @ApiProperty({ required: false, nullable: true })
  contato_padrao: number | null;

  @ApiProperty({ required: false, nullable: true })
  cpf: string | null;

  @ApiProperty({ required: false, nullable: true })
  endereco_padrao: number | null;

  @ApiProperty({ required: false, nullable: true })
  fantasia_apelido: string | null;

  @ApiProperty({ required: false, nullable: true })
  ie: string | null;

  @ApiProperty({ required: false, nullable: true })
  ind_ie: string | null;

  @ApiProperty({ required: false, nullable: true })
  is_cliente: boolean | null;

  @ApiProperty({ required: false, nullable: true })
  is_colaborador: boolean | null;

  @ApiProperty({ required: false, nullable: true })
  is_empresa: boolean | null;

  @ApiProperty({ required: false, nullable: true })
  is_fornecedor: boolean | null;

  @ApiProperty({ required: false, nullable: true })
  is_transportadora: boolean | null;

  @ApiProperty({ required: false, nullable: true })
  nome: string | null;

  @ApiProperty({ required: false, nullable: true })
  tipo: string | null;

  @ApiProperty({ required: false, nullable: true })
  ativo: boolean | null;

  @ApiProperty({ required: false, nullable: true })
  certificado: string | null;

  @ApiProperty({ required: false, default: 0 })
  cod_cli: number = 0;

  @ApiProperty({ required: false, nullable: true })
  codcv: number | null;

  @ApiProperty({ required: false, nullable: true })
  credito_icmssn: boolean | null;

  @ApiProperty({ required: false, nullable: true })
  data_nasc: Date | null;

  @ApiProperty({ required: false, nullable: true })
  info_adicionais: string | null;

  @ApiProperty({ required: false, nullable: true })
  rg: string | null;

  @ApiProperty({ required: false, nullable: true })
  senha_cert: string | null;

  @ApiProperty({ required: false, nullable: true })
  sexo: string | null;

  @ApiProperty({ required: false, nullable: true })
  dataNasc: Date | null;

  @ApiProperty({ required: false, nullable: true })
  id_pdv_operador: number | null;

  @ApiProperty({ required: false, nullable: true })
  id_tecnico: number | null;

  @ApiProperty({ required: false, nullable: true })
  id_usuario: number | null;

  @ApiProperty({ required: false, nullable: true })
  id_vendedor: number | null;

  @ApiProperty({ required: false, nullable: true })
  infoAdicionais: string | null;

  @ApiProperty({ required: false, default: 0 })
  matricula: number = 0;

  @ApiProperty({ required: false, nullable: true })
  pis: string | null;

  @ApiProperty({
    required: false,
    nullable: true,
    type: 'number',
    format: 'decimal',
  })
  aliq_cred_icmssn: Prisma.Decimal | null;

  @ApiProperty({ required: false, nullable: true })
  bloqueado: string | null;

  @ApiProperty({ required: false, default: 0 })
  cod_emp: number = 0;

  @ApiProperty({ required: false, nullable: true })
  contador: string | null;

  @ApiProperty({ required: false, nullable: true })
  crc: string | null;

  @ApiProperty({ required: false, nullable: true })
  crt: string | null;

  @ApiProperty({ required: false, nullable: true })
  data_instalacao: string | null;

  @ApiProperty({ required: false, nullable: true })
  msg: string | null;

  @ApiProperty({ required: false, default: 0 })
  qtd_Terminal: number = 0;

  @ApiProperty({ required: false, nullable: true })
  cod_forn: number | null;

  @ApiProperty({ required: false, nullable: true })
  senhaCert: string | null;

  @ApiProperty({ required: false, default: 0 })
  cod_transp: number = 0;

  @ApiProperty({ required: false, nullable: true })
  id_config_nfe: number | null;

  @ApiProperty({ required: false, nullable: true })
  is_credenciadora: boolean | null;

  @ApiProperty({ required: false, default: 0 })
  cod_cred: number = 0;

  @ApiProperty({ required: false, nullable: true })
  descricao: string | null;

  @ApiProperty({ required: false, nullable: true })
  empresa: number | null;

  @ApiProperty({
    required: false,
    nullable: true,
    type: 'number',
    format: 'decimal',
  })
  saldo: Prisma.Decimal | null;

  @ApiProperty({ required: false, nullable: true })
  cod: string | null;
}
