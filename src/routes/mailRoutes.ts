import { Router } from "express";
import MailController from "../controllers/MailController";

const mailRouter = Router();

mailRouter.post("/send", MailController.sendConfirmationMail);

export default mailRouter;
