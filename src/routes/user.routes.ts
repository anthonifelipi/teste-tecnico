import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listAllUsers.controller";
import updateUserController from "../controllers/updateUserController";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";

export const userRoutes = Router();

userRoutes.post("/", createUserController);
userRoutes.get("/", listUsersController);
userRoutes.patch("/:user_id", verifyAuthToken, updateUserController);
userRoutes.delete("/:user_id", verifyAuthToken, deleteUserController);
