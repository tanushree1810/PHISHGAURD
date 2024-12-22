import express from 'express';
import { browseScamReports } from '../controllers/browseScamController.js';


const Browserrouter = express.Router();

// Browse scam reports
Browserrouter.get('/browse-reports', browseScamReports);

export default Browserrouter;
