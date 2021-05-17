import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { User, UserDocument } from "./schemas/user.schema";


@Injectable()
export class UsersRepository{
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async find(usersFilterQuery: FilterQuery<User>): Promise<User[]>{
        return this.userModel.find(usersFilterQuery)
    }

    async findOne(usersFilterQuery: FilterQuery<User>): Promise<User>{
        return this.userModel.findOne(usersFilterQuery)
    }

    async create(user: User): Promise<User>{
        const newUser = new this.userModel(user);
        return newUser.save()
    }
}