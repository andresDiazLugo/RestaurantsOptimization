import mongoose,{ConnectOptions} from "mongoose";
import {configApp} from "../config/config";

export const connection = async()=>{
    try {
        const mongoURI: string = configApp.DB_URL;
       await mongoose.connect(mongoURI);
        console.log("Conexion exitosa a la base de datos")
    } catch (error) {
        console.log("Error al conectar a la base de datos",error)
    }
}
    

       
    
