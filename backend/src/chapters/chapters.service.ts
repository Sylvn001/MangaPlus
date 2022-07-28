import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter-dto';
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

  async update(id: number, updateChapterDto: UpdateChapterDto) {
    const chapter = await this.chaptersRepository.preload({
      id,
      ...updateChapterDto,
    });

    if (!chapter) throw new NotFoundException();

    return this.chaptersRepository.save(chapter);
  }

  async delete(id: number) {
    const chapter = await this.chaptersRepository.findOne({ where: { id } });

    if (!chapter) throw new NotFoundException();

    return this.chaptersRepository.delete(id);
  }
}
