import express from "express";
import { addTeam, deleteTeam, editTeam } from "../controllers/teamController.js";
const router = express.Router();

router.post("/", addTeam);

router.delete('/:id', deleteTeam);

router.put('/:id', editTeam);


export default router;