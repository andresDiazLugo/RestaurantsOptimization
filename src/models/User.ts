import {Schema,model} from 'mongoose';
import {IUser} from '../interface/usuario'
const userSchema  = new Schema({
    username:{  
        type:String, required:true
      },
    phone: { 
          type:String, required:true
          },
    email:{
        type:String,
        required:true,
        match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    password:{
          type:String, required:true
          },
    createdAt:{
          type:Date, default:Date.now
          }
})

export const User = model<IUser>('User',userSchema);


