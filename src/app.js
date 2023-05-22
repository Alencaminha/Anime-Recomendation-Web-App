import * as database from "./database/database.js";
import express, { json } from "express";

const app = express();
app.use(json());

app.get("/", (req, res) => {
    res.send("Teste");
});

database.createTable();

app.post("/createuser", (req, res) => {
    database.createUser(req.body);
    res.json({
        "statusCode": 200
    });
});

app.put("/updateuser", (req, res) => {
    if (!req.body.id) {
        res.json({
            "statusCode": 400,
            "msg": "Id is missing"
        });
    } else {
        database.updateUser(req.body);
        res.json({
            "statusCode": 200
        });
    }
});

app.listen(3000, () => {
    console.log("Teste api funcionando!");
});
