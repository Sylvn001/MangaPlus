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
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('mangas')
export class MangasController {
  constructor(private readonly mangasService: MangasService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  create(
    @Body() createMangasDto: CreateMangasDto,
    @UploadedFile() img: Express.Multer.File,
  ) {
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
