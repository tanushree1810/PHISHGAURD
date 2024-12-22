import { v2 as cloudinary } from 'cloudinary';
import ScamReport from '../models/ScamReportModel.js';

// Function to handle scam report submission
const addScamReport = async (req, res) => {
  try {
    const { scamType, scamTitle, description, shareReport } = req.body;
    const evidenceFile = req.file;

    let evidenceUrl = null;

    if (evidenceFile) {
      console.log('Received file:', evidenceFile);

      // Upload the file to Cloudinary
      const result = await cloudinary.uploader.upload(evidenceFile.path, {
        resource_type: 'image',
      });

      console.log('Cloudinary Upload Result:', result);
      evidenceUrl = result.secure_url; // Set the URL of the uploaded image
    } else {
      console.log('No evidence file uploaded.');
    }

    // Prepare the scam report data
    const scamReportData = {
      scamType,
      scamTitle,
      description,
      evidenceUrl,
      shareReport: shareReport === 'true', // Convert string "true"/"false" to Boolean
    };

    // Save scam report to the database
    const scamReport = new ScamReport(scamReportData);
    await scamReport.save();

    res.json({ success: true, message: 'Scam report added successfully!' });
  } catch (error) {
    console.error('Error in addScamReport:', error.message);
    res.status(500).json({
      success: false,
      message: error.message || 'Error reporting scam',
    });
  }
};

export { addScamReport };
