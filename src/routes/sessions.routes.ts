import { Router } from "express";
import loginController from "../controllers/sessions/sessions.controller";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";

export const sessionsRoutes = Router();

sessionsRoutes.post("/", loginController);
