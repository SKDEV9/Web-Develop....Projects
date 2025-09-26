import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("request method: ", req.method);
  console.log("URL: ", req.url);
  console.log("IP: ", req.ip);
  console.log("User-Agent", req.headers["user-agent"]); // Navegador e dispositivo 
  console.log("Hora:", new Date().toISOString());
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
