"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.get("/hola", function (req, res) {
    res.json({
        message: "Hola soy el mensaje del server,como te va ?"
    });
});
app.listen(3000, function () {
    console.log("Hola soy express" + "" + port);
});
