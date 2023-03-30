import express from "express";
import dotenv from "dotenv";
import conectarBD from "./config/db.js";
import addTeam from "./routes/teamsRoutes.js";
import addPlayer from "./routes/playerRoutes.js";
import { base64decode } from "nodejs-base64";
import bodyParser from "body-parser"
const app = express();
app.use(express.json());
dotenv.config();


app.use(bodyParser.json());

app.use(function (req, res, next) {
  if (req.headers["authorization"]) {
    console.log(req.headers["authorization"]);
    const authBase64 = req.headers['authorization'].split(' ');
    console.log('authBase64:', authBase64);
    const userPass = base64decode(authBase64[1]);
    console.log('userPass:', userPass);
    const user = userPass.split(':')[0];
    const password = userPass.split(':')[1];

    if (user === 'admin' && password == '1234') {
      // saveSession('admin');
      next();
      return;
    }
  }
  res.status(401);
  res.send({
    error: "Unauthorized"
  });
});

app.use('/api/teams', addTeam);
app.use('/api/players', addPlayer);

conectarBD();
const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})