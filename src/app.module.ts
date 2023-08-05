import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TypeOfPlaceModule } from './type-of-place/type-of-place.module';
import { PlaceModule } from './place/place.module';
import { CityModule } from './city/city.module';

@Module({
  imports: [PrismaModule, TypeOfPlaceModule, PlaceModule, CityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
