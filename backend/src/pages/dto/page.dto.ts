import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsString } from 'class-validator';

export class CreateMangasDto {
  @ApiProperty({ type: String })
  @IsString()
  readonly img_url: string;

  @ApiProperty({ type: String })
  @IsNumberString()
  readonly mangaId: string;
}
