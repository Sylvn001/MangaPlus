import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MangasModule } from './mangas/mangas.module';
import { dbOptions } from './options';

@Module({
  imports: [TypeOrmModule.forRoot(dbOptions), MangasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
