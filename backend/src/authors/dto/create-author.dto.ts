import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  @ApiProperty()
  readonly name: string;
}
