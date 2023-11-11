import express from "express";
import dotenv from "dotenv";

// routes only
import userRoutes from "./routes/userRoutes";
import errorController from "./controllers/errorController";
import mongooseConnection from "./utils/mongooseConnection";
import contactRoutes from "./routes/contactRoutes";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
mongooseConnection();
app.use(cors());
const PORT = process.env.PORT || 8001;

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/contact", contactRoutes);
app.use(errorController);
app.listen(8000, () => {
    console.log("server is running at " + PORT);
});
