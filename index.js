import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

const PORT = 8080;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
});
