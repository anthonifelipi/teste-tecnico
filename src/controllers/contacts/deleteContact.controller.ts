import { Request, Response } from "express";
import deleteContactService from "../../services/contacts/deleteContact.service";

const deleteContactController = async (
  request: Request,
  response: Response
) => {
  const { contact_id } = request.params;
  const contactDeleted = await deleteContactService(contact_id);

  return response.status(204).json(contactDeleted);
};
export default deleteContactController;
