import ScamReport from '../models/ScamReportModel.js';

// Function to fetch scam reports
const browseScamReports = async (req, res) => {
  try {
    // Extract query parameters for pagination and filtering
    const { page = 1, limit = 10, scamType, search, shareReport } = req.query;

    // Build the query based on filters
    const query = {};
    if (scamType) {
      query.scamType = scamType;
    }
    if (search) {
      query.$or = [
        { scamTitle: { $regex: search, $options: 'i' } }, // Case-insensitive search on title
        { description: { $regex: search, $options: 'i' } }, // Case-insensitive search on description
      ];
    }
    if (shareReport !== undefined) {
      query.shareReport = shareReport === 'true';
    }

    // Fetch the scam reports with pagination
    const skip = (page - 1) * limit; // Calculate documents to skip
    const scamReports = await ScamReport.find(query)
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 }); // Sort by most recent

    // Count total matching documents
    const totalReports = await ScamReport.countDocuments(query);

    // Return the data in a paginated format
    res.json({
      success: true,
      reports: scamReports,
      totalPages: Math.ceil(totalReports / limit),
    });
  } catch (error) {
    console.error('Error in browseScamReports:', error.message);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching scam reports',
    });
  }
};

export { browseScamReports };
