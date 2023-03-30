import mongoose from "mongoose";

const teamShema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    mundiales_ganadas: {
        type: Number,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model("Team", teamShema);

export default {
    model: Team,
    schema: teamShema 
};