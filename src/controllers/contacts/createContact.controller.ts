import { Request, Response } from "express";
import createContactService from "../../services/contacts/createContact.service";
import { IContactRequest } from "../../interfaces";

const createContactController = async (request: Request, response: Response) => {
  try {
    const data = request.body;
    const id = request.user.id;
    const contact = await createContactService(data, id);

    return response.status(201).json(contact);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
};
export default createContactController;
