import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { authorsProviders } from './authors.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthorsController],
  providers: [...authorsProviders, AuthorsService],
})
export class AuthorsModule {}
