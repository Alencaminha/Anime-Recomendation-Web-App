import { createTable } from "./database/user.js";
import express, { json } from "express";
import router from "./routes.js";

const app = express();
app.use(json());
app.use(router);

createTable();

app.listen(3000, () => {
    console.log("Teste api funcionando!");
});
