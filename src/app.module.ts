import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { PessoasModule } from './pessoas/pessoas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    PrismaModule,
    PessoasModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
