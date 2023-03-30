import express from "express";
import { addPlayer, deletePlayer, editPlayer, infoPlayer, searchPlayer } from "../controllers/playerController.js";
const router = express.Router();

router.get("/", infoPlayer);
router.get("/search/:name", searchPlayer);

router.post("/", addPlayer);

router.delete('/:id', deletePlayer);

router.put('/:id', editPlayer);


export default router;