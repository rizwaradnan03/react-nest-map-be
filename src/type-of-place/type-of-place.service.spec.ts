import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfPlaceService } from './type-of-place.service';

describe('TypeOfPlaceService', () => {
  let service: TypeOfPlaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeOfPlaceService],
    }).compile();

    service = module.get<TypeOfPlaceService>(TypeOfPlaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
