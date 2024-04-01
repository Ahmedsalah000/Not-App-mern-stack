import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import noteRouter from "./routes/noteRoute.js";
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";
import dbConnection from "./config/database.js";
import ApiError from "./utils/apiError.js";
import globalError from "./middlewares/errorMiddleware.js";

// Configuration
dotenv.config({ path: "./config.env" });

// Database Connection
dbConnection();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Mount Routes
app.use("/api/v1/notes", noteRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

// Global error handling middleware for express
app.use(globalError);

// Route not found handler
app.all("*", (req, res, next) => {
    next(new ApiError(`Can't find this route: ${req.originalUrl}`, 404));
});

// Start the server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// Handle unhandled rejections
process.on("unhandledRejection", (err) => {
    console.error(`Unhandled Rejection: ${err.name} | ${err.message}`);
    server.close(() => {
        console.error(`Shutting down due to unhandled rejection...`);
        process.exit(1);
    });
});
