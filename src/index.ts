import App from "./app";
const app = new App();

//ejecuto los metodos de la clase app
app.configurationServer();
app.middlewares();
app.routes();
app.server();


