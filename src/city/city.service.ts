import { Injectable } from '@nestjs/common';
import { city } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CityService {
    constructor(private prismaService: PrismaService){}

    async findAll(): Promise<city[]>{
        return this.prismaService.city.findMany()
    }
    
    async findById(id: string): Promise<city>{
        return this.prismaService.city.findUnique({where: {id}})
    }

    async createData(data: {name: string, latitude: string, longitude: string}): Promise<city>{
        return this.prismaService.city.create({data})
    }

    async updateData(id: string, data: {name: string, latitude: string, longitude: string}): Promise<city>{
        return this.prismaService.city.update({where: {id}, data})
    }

    async deleteData(id: string): Promise<city>{
        return this.prismaService.city.delete({where: {id}})
    }
}
