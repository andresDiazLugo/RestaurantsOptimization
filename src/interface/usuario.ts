import {Document} from 'mongoose';

export interface IUser extends Document{
    username: string,
    phone: string,
    email: string,
    password: string,
    createAt?:Date;
}

export interface ResponseSignIn{
    alert: string[] | [string[]],
    user: IUser,
    token: string
}