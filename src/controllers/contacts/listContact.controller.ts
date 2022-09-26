import { Request, Response } from "express";
import listContactsService from "../../services/contacts/listContacts.service";

const listContactController = async (request: Request, response: Response) => {
  const listContacts = await listContactsService(request.user.id);
  return response.status(200).json(listContacts);
};
export default listContactController;
