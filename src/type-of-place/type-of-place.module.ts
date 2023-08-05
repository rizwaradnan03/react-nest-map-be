import { Module } from '@nestjs/common';
import { TypeOfPlaceService } from './type-of-place.service';
import { TypeOfPlaceController } from './type-of-place.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [TypeOfPlaceService, PrismaService],
  controllers: [TypeOfPlaceController]
})
export class TypeOfPlaceModule {}
