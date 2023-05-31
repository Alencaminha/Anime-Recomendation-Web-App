import { createTable, populateUser } from "./database/database.js";
import express, { json } from "express";
import router from "./routes.js";

const app = express();
app.use(json());
app.use(router);

createTable();
// populateUser();

app.listen(3000, () => {
    console.log("Servidor aberto!");
});
