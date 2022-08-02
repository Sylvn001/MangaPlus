import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, isEmpty, IsString } from 'class-validator';

export class CreateChapterDto {
  @ApiProperty({ type: String })
  @IsString()
  title: string;

  @ApiProperty({ type: String })
  @IsEmpty()
  manga_id: string;
}
