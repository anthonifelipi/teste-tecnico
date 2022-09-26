import { Request, Response, NextFunction } from "express";
import { IContactRequest } from "../../interfaces";

import * as yup from "yup";
import { SchemaOf, AnySchema, ValidationError } from "yup";

export const contactCreateSchema: SchemaOf<any> = yup.object().shape({
  fullName: yup.string().required("You need to provide your full name"),
  email: yup.string().email().required("You need to provide at least 1 email"),
  email2: yup.string().email(),
  phone: yup.string().required("You need to provide at least 1 phone number"),
  phone2: yup.string(),
});
