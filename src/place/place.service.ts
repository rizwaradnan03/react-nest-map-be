import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { place } from '@prisma/client';

@Injectable()
export class PlaceService {
    constructor(private prismaService: PrismaService) { }

    async findView(): Promise<place[]>{
        return this.prismaService.$queryRawUnsafe(`SELECT place.name as name, place.description as description, type_of_place.name as type_of_place, place.latitude as latitude, place.longitude as longitude FROM place INNER JOIN type_of_place ON type_of_place.id = place.type_of_placeId`)
    }

    async findAll(): Promise<place[]> {
        return this.prismaService.place.findMany()
    }

    async findById(id: string): Promise<place> {
        return this.prismaService.place.findUnique({ where: { id } })
    }

    async createData(data: { name: string, description: string, type_of_placeId: string, latitude: string, longitude: string, cityId: string }): Promise<place> {
        return this.prismaService.place.create({ data })
    }

    async updateData(id: string, data: { name: string, description: string, type_of_placeId: string, latitude: string, longitude: string, cityId: string }): Promise<place> {
        return this.prismaService.place.update({ where: { id }, data })
    }

    async deleteData(id: string): Promise<place> {
        return this.prismaService.place.delete({ where: { id } })
    }
}
