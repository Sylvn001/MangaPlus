import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateChapterDto {
  @ApiProperty({ type: String })
  @IsString()
  title: string;
}
