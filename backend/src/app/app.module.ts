import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MangasModule } from '../mangas/mangas.module';
import { DatabaseModule } from '../database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthorsModule } from 'src/authors/authors.module';
import { MangasService } from 'src/mangas/mangas.service';
import { AuthorsService } from 'src/authors/authors.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MangasModule,
    DatabaseModule,
    AuthorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
