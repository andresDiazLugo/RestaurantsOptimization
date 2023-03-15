import { User } from "../models/User.js";
import { IUser } from "../interface/usuario";
import { alertasUser } from "../alertas/alertas.js";
export const signUp = async ( dateBody:IUser )=>{
    
    try {
        const alertas = new alertasUser()
        //busco el nombre de usuario y tambien el email para comprobar que no existe registro
        const { username,email } = dateBody;
        const searchName:any = await User.find( { username } );
        const searchEmail:any = await User.find( { email } );       
        if( searchName.length  ){
            return alertas.addAlerts( "error","Ya existe un usuario con este nombre" );
        }else if( searchEmail.length ){
            return alertas.addAlerts( "error","Ya existe un usuario con este email" );
        }
        //creo el usuario y lo guardo en la base de datos 
        const newUser = new User(  dateBody );
        await newUser.save();
        return alertas.addAlerts( "success","usuario creado  con exito " )
        
    } catch ( error:any ) {
        console.error( "error",error );
        return 
    }
}