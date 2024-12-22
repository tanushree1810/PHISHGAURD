import express from 'express';
import { handleContactForm } from '../controllers/contactController.js';

const contactrouter = express.Router();

// POST route for handling contact form submission
contactrouter.post('/contacts', handleContactForm);

export default contactrouter;
