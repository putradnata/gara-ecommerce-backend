import { Injectable } from "@nestjs/common";
import { User } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService{
    constructor(private readonly usersRepository: UsersRepository){}

    async getUsers(): Promise<User[]>{
        return this.usersRepository.find({});
    }

    async createUser(username:string, email:string, password: string): Promise<User>{
        return this.usersRepository.create({
            username,
            email,
            password,
        })
    }
}