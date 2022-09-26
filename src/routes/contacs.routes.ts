import { Router } from "express";
import createContactController from "../controllers/contacts/createContact.controller";
import deleteContactController from "../controllers/contacts/deleteContact.controller";
import listContactController from "../controllers/contacts/listContact.controller";
import listContactByIdController from "../controllers/contacts/listContactById.controller";
import updateContactController from "../controllers/contacts/updateContact.controller";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";
import verifyOwner from "../middlewares/verifyOwner.middlewares";

export const contactsRoutes = Router();
import { validateUserCreate } from "../middlewares/validatedUsers.middleware";
import { contactCreateSchema } from "../middlewares/validations/contact.schema";

contactsRoutes.post("/", verifyAuthToken,validateUserCreate(contactCreateSchema), createContactController);
contactsRoutes.get("/", verifyAuthToken, listContactController);
contactsRoutes.get(
  "/:contact_id",
  verifyAuthToken,
  verifyOwner,
  listContactByIdController
);
contactsRoutes.patch(
  "/:contact_id",
  verifyAuthToken,
  verifyOwner,
  updateContactController
);
contactsRoutes.delete(
  "/:contact_id",
  verifyAuthToken,
  verifyOwner,
  deleteContactController
);
