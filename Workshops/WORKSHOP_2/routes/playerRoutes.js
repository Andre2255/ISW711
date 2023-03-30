import express from "express";
import { addPlayer, deletePlayer, editPlayer, infoPlayer } from "../controllers/playerController.js";
const router = express.Router();

router.get("/", infoPlayer)

router.post("/", addPlayer);

router.delete('/:id', deletePlayer);

router.put('/:id', editPlayer);


export default router;