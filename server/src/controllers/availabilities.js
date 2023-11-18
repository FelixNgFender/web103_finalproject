import Availability from "../models/availability.js";
  
  const getTutorTime = async (req, res) => {
    try {
        console.log('from here',req.params.time)
      const { rows } = await Availability.findTime(req.params.tutorId);
      console.log(rows)
      return res.status(200).json(rows);
    } catch (error) {
        console.log(error.message)
      res.status(409).json({ error: error.message });
    }
  };
  
  const addTimeTutor = async (req, res) => {
    try {
      const { rows } = await Availability.create(req.body);
      return res.status(201).json(rows[0]);
    } catch (error) {
        console.log(error.message)
      res.status(409).json({ error: error.message });
    }
  };

  export default {
    getTutorTime,
    addTimeTutor,
  };
