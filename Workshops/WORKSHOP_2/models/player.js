import mongoose from "mongoose";
import Team from "./team.js";

const playerShema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    team: {
        type: Team.schema,
        required: false
    }
  },
  {
    timestamps: true,
  }
);

const Player = mongoose.model("Player", playerShema);
export default {
    model : Player,
    shema : playerShema
}