import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItensModule } from './itens/itens.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    PrismaModule,
    PessoasModule,
    ItensModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
