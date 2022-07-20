import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

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
}
