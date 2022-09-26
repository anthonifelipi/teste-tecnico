import { Request, Response } from "express";
import listContactByIdService from "../../services/contacts/listContactById.service";

const listContactByIdController = async (
  request: Request,
  response: Response
) => {
  const { contact_id } = request.params;
  const listContact = await listContactByIdService(contact_id);
  return response.status(200).json(listContact);
};

export default listContactByIdController;
