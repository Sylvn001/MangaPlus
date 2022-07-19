import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorsService {
  constructor(
    @Inject('AUTHORS_REPOSITORY')
    private authorsRepository: Repository<Author>,
  ) {}

  create(createAuthorDto: CreateAuthorDto) {
    this.authorsRepository.create(createAuthorDto);
  }

  findAll() {
    return this.authorsRepository.find();
  }

  findOne(id: number) {
    return this.authorsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    const author = await this.authorsRepository.preload({
      id,
      ...updateAuthorDto,
    });

    if (!author) throw new NotFoundException();

    return this.authorsRepository.save(author);
  }

  async remove(id: number) {
    const author = await this.authorsRepository.findOne({ where: { id } });

    if (!author) throw new NotFoundException();

    return this.authorsRepository.delete(id);
  }
}
