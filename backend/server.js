import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Message from "./models/Message.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGO_ATLAS_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Portfolio Backend is running...");
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, contact, message } = req.body;

    if (!name || !contact || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = new Message({
      name,
      contact,
      message,
    });

    await newMessage.save();

    res.status(201).json({ message: "Message stored successfully" });
  } catch (error) {
    console.error("Error storing message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Database Connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
