import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UnprocessableEntityException,
} from '@nestjs/common';
import { MangasService } from './mangas.service';
import { CreateMangasDto } from './dto/create-mangas.dto';
import { UpdateMangasDto } from './dto/update-mangas.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('mangas')
export class MangasController {
  constructor(private readonly mangasService: MangasService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('img', {
      dest: './files/mangas',
    }),
  )
  create(
    @Body() createMangasDto: CreateMangasDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'jpeg',
        })
        .addMaxSizeValidator({
          maxSize: 1000,
        })
        .build({
          errorHttpStatusCode: UnprocessableEntityException,
        }),
    )
    file: Express.Multer.File,
  ) {
    console.log(file);
    console.log(createMangasDto);
    //return this.mangasService.create(createMangasDto);
  }

  @Get()
  findAll() {
    return this.mangasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mangasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMangasDto: UpdateMangasDto) {
    return this.mangasService.update(+id, updateMangasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mangasService.remove(+id);
  }
}
