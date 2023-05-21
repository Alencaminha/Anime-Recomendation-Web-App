const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Teste");
});

app.post("/pessoa", (req, res) => {
    console.log(req.body);
    res.json({
        "statusCode": 200
    });
});

app.listen(3000, () => {
    console.log("Teste api funcionando!");
});
