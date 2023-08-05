import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { type_of_place } from '@prisma/client';

@Injectable()
export class TypeOfPlaceService {
    constructor(private prismaService: PrismaService){}

    async findAll(): Promise<type_of_place[]>{
        return this.prismaService.type_of_place.findMany()
    }
    
    async findById(id: string): Promise<type_of_place>{
        return this.prismaService.type_of_place.findUnique({where: {id}})
    }

    async createData(data: {name: string}): Promise<type_of_place>{
        return this.prismaService.type_of_place.create({data})
    }

    async updateData(id: string, data: {name: string}): Promise<type_of_place>{
        return this.prismaService.type_of_place.update({where: {id}, data})
    }

    async deleteData(id: string): Promise<type_of_place>{
        return this.prismaService.type_of_place.delete({where: {id}})
    }
}
