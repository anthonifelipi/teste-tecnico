import { Request, Response } from "express";
import updateUserService from "../services/users/updateUser.service";

const updateUserController = async (request: Request, response: Response) => {
  const data = request.body;
  const id = request.params.user_id;
  const userUpdate = await updateUserService(data, request.user, id);

  return response.status(200).json(userUpdate);
};
export default updateUserController;
