//importaciones para la configuracion del servidor
import express,{ Application } from 'express';
import cors from "cors";
import morgan from 'morgan';
import { connection } from "./DataBase/connection";
import { configApp } from "./config/config"
//importaciones de rutas
import routeUser from "./routes/user.route";

class App{
    
    private app:Application;
    
    constructor(){
       this.app = express();
    }
    //configuraciones del server
     configurationServer(){
        this.app.set("PORT",configApp.PORT);
    }
    //middlewares
     middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan("dev"));
    }
    //routes
     routes(){
        //ruta usuario
        this.app.use("/",routeUser);
    }

    //levantar servidor
     server(){
        const numberPort = this.app.get("PORT");
        this.app.listen(this.app.get("PORT"),()=>{
            console.log("server runing in the port ",numberPort)
            connection();
        });
    }

}

export default App;