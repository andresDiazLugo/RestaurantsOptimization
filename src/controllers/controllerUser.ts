import {Request,Response} from 'express';
import {signUp} from '../utils/user.utils.js';

export const controllerSignUp =async (req:Request,res:Response)=>{
    const dateForModelUser = req.body;
    const response =await signUp(dateForModelUser);
  
    res.send(response);
}