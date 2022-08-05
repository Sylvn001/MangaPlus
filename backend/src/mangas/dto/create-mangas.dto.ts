import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumberString, IsString } from 'class-validator';

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

  @ApiProperty({ type: Number })
  @IsNumberString()
  readonly authorId: number;

  @ApiProperty({ type: Date })
  @IsDateString()
  readonly published_at: Date;
}
