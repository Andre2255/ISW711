import express from "express";
import dotenv from "dotenv";
import conectarBD from "./config/db.js";
import addTeam from "./routes/TeamsRoutes.js";
const app = express();
app.use(express.json());
dotenv.config();

app.use('/api/teams', addTeam);


conectarBD();
const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})