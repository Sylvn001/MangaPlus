import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
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
  @IsString()
  readonly img: string;

  @ApiProperty({ type: String })
  @IsNumberString()
  readonly author_id: number;

  @ApiProperty({ type: Date })
  @IsDate()
  readonly published_at: { type: Date };
}
