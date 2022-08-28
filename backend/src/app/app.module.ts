import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MangasModule } from '../mangas/mangas.module';
import { DatabaseModule } from '../database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthorsModule } from 'src/authors/authors.module';
import { ChaptersModule } from 'src/chapters/chapters.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MulterModule.register({ dest: './uploads' }),
    MangasModule,
    DatabaseModule,
    ChaptersModule,
    AuthorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
