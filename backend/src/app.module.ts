import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MangasModule } from './mangas/mangas.module';

const options: object = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres123',
  database: 'appmangas',
  entities: [],
  synchronize: true,
};

@Module({
  imports: [TypeOrmModule.forRoot(options), MangasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
