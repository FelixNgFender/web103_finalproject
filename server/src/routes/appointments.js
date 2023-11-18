import express from "express";
import AppointmentsController from "../controllers/appointments.js";

const router = express.Router();

router.post("/", AppointmentsController.createAppointment);

export default router;