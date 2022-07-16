import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { MangasService } from './mangas.service';
import { MangasController } from './mangas.controller';
import { mangasProviders } from './mangas.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [MangasController],
  providers: [...mangasProviders, MangasService],
})
export class MangasModule {}
