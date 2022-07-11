import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MangasModule } from '../mangas/mangas.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [MangasModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
