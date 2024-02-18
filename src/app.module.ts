import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [],
  providers: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      models: [],
      autoLoadModels: true,
      username: 'postgres',
      password: 'random',
      database: 'node-server',
    }),
  ],
})
export class AppModule {}
