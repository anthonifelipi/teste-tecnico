import express from "express";
import "express-async-errors";
import { PrismaClient } from "@prisma/client";
import { userRoutes } from "./routes/user.routes";
import { sessionsRoutes } from "./routes/sessions.routes";
import { contactsRoutes } from "./routes/contacs.routes";
import handlerErrors from "./middlewares/handlerError.middlewares";
import cors from "cors";

export const prisma = new PrismaClient();
export const app = express();
app.use(cors());

app.use(express.json());

app.use("/users/contacts", contactsRoutes);
app.use("/login", sessionsRoutes);
app.use("/users", userRoutes);

app.use(handlerErrors);
