import { Test, TestingModule } from '@nestjs/testing';
import { MangasController } from './mangas.controller';
import { MangasService } from './mangas.service';

describe('MangasController', () => {
  let controller: MangasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MangasController],
      providers: [MangasService],
    }).compile();

    controller = module.get<MangasController>(MangasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
