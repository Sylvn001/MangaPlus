import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, isString, IsString } from 'class-validator';

export class CreateMangasDto {
  @ApiProperty({ type: String })
  @IsString()
  readonly img_url: string;

  @ApiProperty({ type: String })
  @IsNumberString()
  readonly mangaId: string;

  @ApiProperty({ type: String })
  @IsString()
  readonly name: string;
}
