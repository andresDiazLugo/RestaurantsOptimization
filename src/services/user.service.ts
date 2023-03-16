import { User } from "../models/User.js";
import { IUser } from "../interface/usuario";
import { alertasUser } from "../alertas/alertas.js";
import { encryptPassword,comparePassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/token.js";

export const signUp = async ( dateBody:IUser )=>{
    
    try {
        const alertas = new alertasUser()
        //busco el nombre de usuario y tambien el email para comprobar que no existe registro
        const { username,email,password } = dateBody;
        dateBody.password = encryptPassword( password );
        const searchName:any = await User.findOne( { username } );
        const searchEmail:any = await User.findOne( { email } );       
        if( searchName  ){
            return alertas.addAlerts( "error","Ya existe un usuario con este nombre" );
        }else if( searchEmail ){
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

export const signIn = async (dateBody:IUser)=>{
 
    try {
        const alertas = new alertasUser()
        //voy a buscar en la base de datos si exite el usuario o email
        const { username,email,password } = dateBody;
        const searchName:IUser | null = await User.findOne( { username } );
        const searchEmail:IUser | null = await User.findOne( { email } );  
        const msg = "El usuario o contraseña es incorrecto";
        const comparateHashPassword = comparePassword( password,searchEmail?.password || searchName?.password);
        if( searchName || searchEmail ){
            //comparo que el password encriptado sea el correcto
            if( !comparateHashPassword ){
                return alertas.addAlerts( "error",msg );
            }
            //si el usuario existe voy a devolver un dato para el cliente que incluíra un token
            const token = generateToken( searchEmail?.id || searchName?.id );  
            return {
                alert : alertas.addAlerts( "success","usuario iniciado con exito" ),
                user : searchEmail || searchName,
                token 
            } 
        }
        return alertas.addAlerts( "error",msg );
        
    } catch ( error:any ) {
        console.error( "error",error );
        return 
    }
}


