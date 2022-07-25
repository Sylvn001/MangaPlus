import { chaptersProviders } from './chapters.providers';
import { ChaptersService } from './chapters.service';
import { DatabaseModule } from './../database/database.module';
import { ChaptersController } from './chapters.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [ChaptersController],
  providers: [...chaptersProviders, ChaptersService],
})
export class ChaptersModule {}
