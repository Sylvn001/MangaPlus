import { ApiProperty } from '@nestjs/swagger';
import {
  IsBase64,
  IsDateString,
  IsNumberString,
  IsString,
} from 'class-validator';

export class CreateMangasDto {
  @ApiProperty({ type: String })
  @IsString()
  readonly name: string;

  @ApiProperty({ type: String })
  @IsString()
  readonly resume: string;

  @ApiProperty({ type: String })
  readonly img: Express.Multer.File;

  @ApiProperty({ type: Number })
  @IsNumberString()
  readonly authorId: number;

  @ApiProperty({ type: Date })
  @IsDateString()
  readonly published_at: Date;
}
