import { Mangas } from './entities/mangas.entity';
import { Inject, Injectable } from '@nestjs/common';
import { CreateMangasDto } from './dto/create-mangas.dto';
import { UpdateMangasDto } from './dto/update-mangas.dto';
import { Repository } from 'typeorm';

@Injectable()
export class MangasService {
  constructor(
    @Inject('MANGAS_REPOSITORY')
    private mangaRepository: Repository<Mangas>,
  ) {}

  create(createMangasDto: CreateMangasDto) {
    return 'This action adds a new mangas';
  }

  findAll() {
    return this.mangaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} mangas`;
  }

  update(id: number, updateMangasDto: UpdateMangasDto) {
    return `This action updates a #${id} mangas`;
  }

  remove(id: number) {
    return `This action removes a #${id} mangas`;
  }
}
