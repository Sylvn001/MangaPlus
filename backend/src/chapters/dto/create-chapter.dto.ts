import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, isEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateChapterDto {
  @ApiProperty({ type: String })
  @IsString()
  readonly title: string;

  @ApiProperty({ type: String })
  @IsNumberString()
  readonly mangaId: string;
}
