import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { TypeOfPlaceService } from './type-of-place.service';
import { type_of_place } from '@prisma/client';

@Controller('type-of-place')
export class TypeOfPlaceController {
    constructor(private typeOfPlaceService: TypeOfPlaceService) { }

    @Get()
    async findAll(): Promise<type_of_place[]> {
        const datas = await this.typeOfPlaceService.findAll();

        return datas;
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<type_of_place> {
        const datas = await this.typeOfPlaceService.findById(id);

        return datas;
    }

    @Post()
    async createData(@Body() data: { name: string }): Promise<type_of_place> {
        return this.typeOfPlaceService.createData(data)
    }

    @Put(':id')
    async updateData(@Param('id') id: string, @Body() data: { name: string }): Promise<type_of_place> {
        return this.typeOfPlaceService.updateData(id, data)
    }

    @Delete(':id')
    async deleteData(@Param('id') id: string): Promise<type_of_place>{
        return this.typeOfPlaceService.deleteData(id)
    }
}
