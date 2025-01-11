import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Cache-Control',
    'Expires',
    'Pragma'
  ],
  credentials: true // Corrected spelling from Credential to credentials
}));
app.use(cookieParser());
app.use(express.json()); // To parse JSON request bodies

// MongoDB connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL); // Corrected function call to mongoose.connect
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process if unable to connect
  }
};

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => { // Added async keyword to listen callback
  await connect(); // Connect to MongoDB before starting the server
  console.log(`Server running on port ${PORT}`);
});
