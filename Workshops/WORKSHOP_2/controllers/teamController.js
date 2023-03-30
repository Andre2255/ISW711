import Team from "../models/team.js";

const addTeam = async (req, res) => {
  try {
    const team = new Team.model(req.body);
    const teamAlmacenado = await team.save();
    res.json(teamAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const deleteTeam = async (req, res) => {
  const teamId = req.params.id;
  const team = await Team.model.findById(teamId);
  if(!team) {
    res.status(404).json({msg: "No encontrado"})
  }
  try {
    await team.deleteOne();
    res.json({
        msg: `Team con ID ${teamId} eliminado.`
    });
  } catch (error) {
    error;
  }
 
};

const editTeam = async (req, res) => {
    const teamId = req.params.id;
    const team = await Team.model.findById(teamId);
    if(!team) {
      res.status(404).json({msg: "No encontrado"})
    }
    team.nombre = req.body.nombre || team.nombre;
    team.mundiales_ganadas = req.body.mundiales_ganadas || team.mundiales_ganadas;
    try {
      const teamAlmacenado = await team.save();
      res.json(teamAlmacenado);
    } catch (error) {
      error;
    }
   
  };

export { addTeam, deleteTeam, editTeam };
