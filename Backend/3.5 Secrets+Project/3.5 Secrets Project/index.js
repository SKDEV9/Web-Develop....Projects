//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


function passwordvalidation(req, res, next) {
    console.log(req.body);
    req.password = req.body.password;
    next();
}

//Acessando a pagina inicial
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


//Validação da senha
app.post("/check", passwordvalidation, (req, res) => {
    if(req.password === 'ILoveProgramming') {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.sendFile(__dirname + "/public/index.html");
    }
    
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});