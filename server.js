// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoutes from "./src/routes/authRoutes.js";
import recordRoutes from "./src/routes/recordRoutes.js";
import dashboardRoutes from "./src/routes/dashboardRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/records", recordRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/users", userRoutes);

// DB Connection + Server Start
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected ✅");

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000} 🚀`);
    });

  } catch (error) {
    console.error("DB Connection Error ❌", error);
    process.exit(1);
  }
};

startServer();