import {Request,Response} from 'express';
import {signUp} from '../services/user.service.js';

export const controllerSignUp =async (req:Request,res:Response)=>{
    const dateForModelUser = req.body;
    const response =await signUp(dateForModelUser);
  
    res.send(response);
}