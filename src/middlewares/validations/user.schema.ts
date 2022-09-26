import { Request, Response, NextFunction } from "express";
import { IUserRequest } from "../../interfaces";

import * as yup from "yup";
import { SchemaOf, AnySchema, ValidationError } from "yup";

export const userCreateSchema: SchemaOf<IUserRequest> = yup.object().shape({
  fullName: yup.string().required("You need to provide your full name"),
  email: yup.string().email().required("Please enter 1 email"),
  email2: yup.string().email(),
  password: yup.string().required("Password is required"),
  phone: yup.string().required("You need to provide at least 1 phone number"),
  phone2: yup.string(),
});


