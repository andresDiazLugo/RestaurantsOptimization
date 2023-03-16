import { Request,Response } from 'express';
import { signUp,signIn } from '../services/user.service.js';
import { ResponseSignIn } from '../interface/usuario';

export const controllerSignUp = async ( req:Request,res:Response ):Promise<void>=>{
    const dateForModelUser = req.body;
    const response = await signUp(dateForModelUser);
    res.status(200).json( response );
}

export const controllerSignIn = async ( req:Request,res:Response ):Promise<void>=>{
    const dateForModelUser = req.body;
    const response = await signIn(dateForModelUser);
    
    res.status(200).json( response );

}