import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

//setup express
const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  //serving static files for production
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  //if in development
  app.get("/", (_, res) => {
    res.send("API is running....");
  });
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
