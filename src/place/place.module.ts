import { Module } from '@nestjs/common';
import { PlaceService } from './place.service';
import { PlaceController } from './place.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PlaceService, PrismaService],
  controllers: [PlaceController]
})
export class PlaceModule {}
