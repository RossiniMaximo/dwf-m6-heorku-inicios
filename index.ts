import * as express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/hola", (req, res) => {
    res.json({
        message: "Hola soy el mensaje del server,como te va"
    })
})

app.listen(3000, () => {
    console.log("Hola soy express" + port);
})