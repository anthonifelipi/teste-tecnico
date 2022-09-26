import { SchemaOf, AnySchema, ValidationError } from "yup";
import { Request, Response, NextFunction } from "express";

export const validateUserCreate =
  (schema: AnySchema) =>
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const validatedData = await schema.validate(request.body);
      request.body = validatedData;
      next();
    } catch (error) {
      if (error instanceof ValidationError) {
        return response.status(400).json({error: error.message});
      }
    }
  };
