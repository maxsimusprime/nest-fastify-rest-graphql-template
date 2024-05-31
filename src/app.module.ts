import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ApiModule } from './api/api.module';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [PrismaModule, ApiModule, GraphqlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
