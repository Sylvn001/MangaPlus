import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { Chapter } from './entities/chapter.entity';

@Injectable()
export class ChaptersService {
  constructor(
    @Inject('CHAPTERES_REPOSITORY')
    private chaptersRepository: Repository<Chapter>,
  ) {}

  create(createChapterDto: CreateChapterDto) {
    return this.chaptersRepository.create(createChapterDto);
  }
}
