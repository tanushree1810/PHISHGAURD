import express from "express";
import { addScamReport } from "../controllers/scamReportController.js";
import upload from "../middleware/multer.js";


const scamReportRouter = express.Router();

// Route to add a scam report (includes optional file upload)
scamReportRouter.post(
  "/add",
  upload.single("evidenceFile"), // Handles single file upload with the field name 'evidenceFile'
  addScamReport
);

export default scamReportRouter;
