import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MangasModule } from './mangas/mangas.module';

@Module({
  imports: [MangasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
