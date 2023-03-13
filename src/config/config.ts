import dotenv from 'dotenv';
dotenv.config();

interface ConfigApp{
    PORT:string,
    DB_URL:string 
}

export const configApp:ConfigApp = {
    PORT:process.env.PORT || "4000",
    DB_URL: process.env.DB_URL || ""
}