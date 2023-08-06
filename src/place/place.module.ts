import { Module } from '@nestjs/common';
import { PlaceService } from './place.service';
import { PlaceController } from './place.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CityService } from 'src/city/city.service';

@Module({
  providers: [PlaceService, PrismaService, CityService],
  controllers: [PlaceController]
})
export class PlaceModule {}
