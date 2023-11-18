import Appointment from "../models/appointment.js";

const createAppointment = async (req, res) => {
    try {
        const { rows } = await Appointment.create(req.body);
        return res.status(201).json(rows[0]);
      } catch (error) {
        res.status(409).json({ error: error.message });
      }
};

export default {
  createAppointment
};
