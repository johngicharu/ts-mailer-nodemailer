import { Router } from "express";
import userRouter from "./userRouter";
import mailRouter from "./mailRoutes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/mail", mailRouter);

export default routes;
