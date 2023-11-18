import express from "express";
import UsersController from "../controllers/users.js";

const router = express.Router();

router.get("/me", UsersController.getCurrentUser);
router.put("/me", UsersController.updateCurrentUser);

router.get('/tutors', UsersController.getAllTutors)
router.get("/", UsersController.getAll)

export default router;
