const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Teste");
});

app.listen(3000, () => {
    console.log("Teste api funcionando!");
});
