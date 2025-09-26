import express from "express";

const app = express();
const port = 3000;

//Configura o EJS como template engine
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDate(); // retorna número de 0 a 6

    res.render("index", { day }); // passa a variável "day" pro EJS
});


app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});

