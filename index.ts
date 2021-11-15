import * as express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/hola", (req, res) => {
    res.json({
        message: "Hola soy el mensaje del server,como te va"
    });
});

process.env.NODE_ENV = "Development"

app.get("/env", (req, res) => {
    res.json({
        environment: process.env.NODE_ENV,
    });
});

app.listen(3000, () => {
    console.log("Hola soy express" + port);
});
