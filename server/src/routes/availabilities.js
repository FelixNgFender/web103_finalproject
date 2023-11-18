import express from "express";
import AvailabilitiesController from "../controllers/availabilities.js";

const router = express.Router();

router.get("/:tutorId", AvailabilitiesController.getTutorTime);
router.post("/", AvailabilitiesController.addTimeTutor);

export default router;
