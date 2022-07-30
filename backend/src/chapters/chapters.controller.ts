import { ChaptersService } from './chapters.service';
import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  ExpressAdapter,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { ApiResponse } from '@nestjs/swagger';
import { CreateChapterDto } from './dto/create-chapter.dto';

@Controller('chapters')
export class ChaptersController {
  constructor(private readonly chaptersService: ChaptersService) {}

  @ApiResponse({ status: 201, description: 'Chapter created!' })
  @ApiResponse({ status: 400, description: 'Bad Request error' })
  @Post()
  create(@Body() createChapterDto: CreateChapterDto) {
    return this.chaptersService.create(createChapterDto);
  }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    files.forEach((file: Express.Multer.File, index) => {
      const fileExtension = file.originalname.substring(
        file.originalname.length - 3,
      );
      const fileName = `${file.originalname}-page-${
        index + 1
      }.${fileExtension}`;

      console.log(fileName);
    });
  }

  @Get()
  findAll() {
    return this.chaptersService.findAll();
  }
}
