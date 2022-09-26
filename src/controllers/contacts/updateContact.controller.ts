import { Request, Response } from "express";
import updateContactService from "../../services/contacts/updateContact.service";

const updateContactController = async (
  request: Request,
  response: Response
) => {
  const data = request.body;
  const dataUser = request.user;
  const { contact_id } = request.params;

  const updateContact = await updateContactService(data, dataUser, contact_id);

  return response.status(200).json(updateContact);
};

export default updateContactController;
