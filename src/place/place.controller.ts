import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PlaceService } from './place.service';
import { place } from '@prisma/client';

@Controller('place')
export class PlaceController {
    constructor(private placeService: PlaceService) { }

    @Get('view/')
    async findView(): Promise<place[]> {
        const datas = await this.placeService.findView();

        return datas;
    }

    @Get()
    async findAll(): Promise<place[]> {
        const datas = await this.placeService.findAll();

        return datas;
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<place> {
        const datas = await this.placeService.findById(id);

        return datas;
    }

    @Post()
    async createData(@Body() data: { name: string, description: string, type_of_placeId: string, latitude: string, longitude: string, cityId: string }): Promise<place> {
        return this.placeService.createData(data)
    }

    @Put(':id')
    async updateData(@Param('id') id: string, @Body() data: { name: string, description: string, type_of_placeId: string, latitude: string, longitude: string, cityId: string }): Promise<place> {
        return this.placeService.updateData(id, data)
    }

    @Delete(':id')
    async deleteData(@Param('id') id: string): Promise<place> {
        return this.placeService.deleteData(id)
    }
}
