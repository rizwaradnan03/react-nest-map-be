import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfPlaceController } from './type-of-place.controller';

describe('TypeOfPlaceController', () => {
  let controller: TypeOfPlaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeOfPlaceController],
    }).compile();

    controller = module.get<TypeOfPlaceController>(TypeOfPlaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
