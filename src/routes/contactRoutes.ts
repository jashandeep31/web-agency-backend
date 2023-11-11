import { Router } from "express";
import { createContact } from "../controllers/contactController";
import { contactCreateSchema } from "../validators/contactValidators";
import sendValidationErrors from "../utils/sendValidationError";
const routes = Router();

routes
    .route("/create")
    .post(contactCreateSchema, sendValidationErrors, createContact);

const contactRoutes = routes;
export default contactRoutes;
