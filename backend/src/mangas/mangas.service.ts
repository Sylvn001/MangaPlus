import { Manga } from './entities/manga.entity';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMangasDto } from './dto/create-mangas.dto';
import { UpdateMangasDto } from './dto/update-mangas.dto';
import { Repository } from 'typeorm';

@Injectable()
export class MangasService {
  constructor(
    @Inject('MANGAS_REPOSITORY')
    private mangasRepository: Repository<Manga>,
  ) {}

  create(createMangasDto: CreateMangasDto) {
    return this.mangasRepository.save(createMangasDto);
  }

  findAll() {
    return this.mangasRepository.find();
  }

  findOne(id: number) {
    return this.mangasRepository.findOne({ where: { id } });
  }

  async update(id: number, updateMangasDto: UpdateMangasDto) {
    const mangas = await this.mangasRepository.preload({
      id,
      ...updateMangasDto,
    });

    if (!mangas) throw new NotFoundException();

    return this.mangasRepository.save(mangas);
  }

  async remove(id: number) {
    const mangas = await this.mangasRepository.findOne({ where: { id } });

    if (!mangas) throw new NotFoundException();

    return this.mangasRepository.delete(id);
  }
}
