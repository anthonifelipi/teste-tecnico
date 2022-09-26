import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import listUsersController from "../controllers/users/listAllUsers.controller";
import updateUserController from "../controllers/users/updateUserController";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";
import { userCreateSchema } from "../middlewares/validations/user.schema";
import { validateUserCreate } from "../middlewares/validatedUsers.middleware";

export const userRoutes = Router();

userRoutes.post(
  "/",
  validateUserCreate(userCreateSchema),
  createUserController
);
userRoutes.get("/", listUsersController);
userRoutes.patch("/:user_id", verifyAuthToken, updateUserController);
userRoutes.delete("/:user_id", verifyAuthToken, deleteUserController);
