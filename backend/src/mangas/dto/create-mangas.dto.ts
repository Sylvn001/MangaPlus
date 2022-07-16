import { IsString } from 'class-validator';

export class CreateMangasDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly resume: string;

  @IsString()
  readonly img: string;
}
