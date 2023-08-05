import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { city } from '@prisma/client';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
    constructor(private cityService: CityService) { }

    @Get()
    async findAll(): Promise<city[]> {
        const datas = await this.cityService.findAll();

        return datas;
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<city> {
        const datas = await this.cityService.findById(id);

        return datas;
    }

    @Post()
    async createData(@Body() data: { name: string, latitude: string, longitude: string }): Promise<city> {
        return this.cityService.createData(data)
    }

    @Put(':id')
    async updateData(@Param('id') id: string, @Body() data: { name: string, latitude: string, longitude: string }): Promise<city> {
        return this.cityService.updateData(id, data)
    }

    @Delete(':id')
    async deleteData(@Param('id') id: string): Promise<city> {
        return this.cityService.deleteData(id)
    }
}
