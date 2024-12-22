import mongoose from 'mongoose';

// Define the schema for scam reports
const scamReportSchema = new mongoose.Schema({
  scamType: { 
    type: String, 
    required: true 
  },
  scamTitle: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  evidenceUrl: { 
    type: String, // Cloudinary URL
  },
  shareReport: { 
    type: Boolean, 
    default: false // Default to false if not explicitly provided
  },
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Avoid duplicate model creation during hot reloads in development
const ScamReport = mongoose.models.ScamReport || mongoose.model('ScamReport', scamReportSchema);

export default ScamReport;
