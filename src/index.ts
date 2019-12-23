import * as Express from "express";
import * as morgan from "morgan";
import * as cors from "cors";

const app: Express.Application = Express();

// Config
import config from "../config";
import routes from "./routes/";
const { port } = config;

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api", routes);

app.listen(port, () => console.log(`Server listening on port: ${port}`));
