import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouter = Router();

userRouter.post("/sendmail", UserController.sendConfirmationMail);

export default userRouter;
