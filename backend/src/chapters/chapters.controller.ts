import { ChaptersService } from './chapters.service';
import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
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
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() values: any) {
    console.log(file);
    console.log(values);
  }

  @Get()
  findAll() {
    return this.chaptersService.findAll();
  }
}
