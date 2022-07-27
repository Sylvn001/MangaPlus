import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { Chapter } from './entities/chapter.entity';

@Injectable()
export class ChaptersService {
  constructor(
    @Inject('CHAPTERS_REPOSITORY')
    private chaptersRepository: Repository<Chapter>,
  ) {}

  create(createChapterDto: CreateChapterDto) {
    return this.chaptersRepository.create(createChapterDto);
  }

  findAll() {
    return this.chaptersRepository.find();
  }

  findOne(id: number) {
    return this.chaptersRepository.find({ where: { id } });
  }
}
