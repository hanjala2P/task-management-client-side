import { Router } from "express";
import { UserController } from "./user.controller.js";

const router =Router();

router.post("/create-user",UserController.createUser);
router.get("/",UserController.getAllUser);

export const UserRoutes =router; 