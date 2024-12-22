import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import CORS middleware
import connectDB from "./config/mongodb.js"; // Import DB connection
import userRouter from "./routes/UserRoutes.js"; // Import user routes
import scamReportRouter from "./routes/scamReportRoutes.js";
import bodyParser from "body-parser";
import connectCloudinary from "./config/cloudinary.js";
import NewRouter from "./routes/subscriberRoutes.js";
import Browserrouter from "./routes/BrowseReport.js";
import contactrouter from "./routes/contactRoutes.js";

dotenv.config(); 
connectCloudinary();



const app = express();

// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true }));



// Connect to MongoDB
connectDB();

// Routes
app.use("/api/user", userRouter); // User routes for registration and login
app.use("/api/scam-reports", scamReportRouter);
app.use('/api/subscribers', NewRouter)
app.use('/api/browse',Browserrouter)
app.use('/api/contact',contactrouter)


// Home route (API working check)
app.get('/', (req, res) => {
  res.send("API WORKING");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
