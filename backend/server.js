import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import Message from "./models/Message.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGO_ATLAS_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use an App Password, not your regular password
  },
});

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

    // Send Email Notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending to yourself
      subject: `🚀 New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Contact Info:</strong> ${contact}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #silver;">
            ${message}
          </div>
          <hr style="border: 0; border-top: 1px solid #eee; margin-top: 20px;">
          <p style="font-size: 12px; color: #888;">This message was sent from your portfolio website.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Message stored and email notification sent" });
  } catch (error) {
    console.error("Error in /api/contact:", error);
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
