import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';
import Subscriber from '../models/Subscriber.js';
import dotenv from 'dotenv';

dotenv.config();

// Resolve path for views
const __dirname = path.resolve();

// Create a transport for sending emails via Gmail
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Use Handlebars for email templates
transporter.use(
  'compile',
  hbs({
    viewEngine: {
      extname: '.hbs',
      layoutsDir: path.join(__dirname, 'views/email/'),
      defaultLayout: 'welcome',
    },
    viewPath: path.join(__dirname, 'views/email/'),
    extName: '.hbs',
  })
);

// Controller for subscribing a user to the newsletter
export const subscribeUser = async (req, res) => {
    try {
      const { email } = req.body;
  
      // Check if the email already exists in the database
      const existingSubscriber = await Subscriber.findOne({ email });
      if (existingSubscriber) {
        return res.status(400).json({ message: 'Email is already subscribed.' });
      }
  
      // Save the subscriber's email to the database
      const subscriber = new Subscriber({ email });
      await subscriber.save();
  
      // Set up the email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to PhishGuard!',
        template: 'welcome',  // Email template name
        context: { email },    // Pass email to the template context
      };
  
      // Send the welcome email
      await transporter.sendMail(mailOptions);
      res.status(201).json({ message: 'Subscription successful! Welcome email sent.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  };

// Controller for unsubscribing a user from the newsletter
export const unsubscribeUser = async (req, res) => {
  try {
    const { email } = req.body;

    // Find the subscriber and delete them from the database
    const subscriber = await Subscriber.findOneAndDelete({ email });
    if (!subscriber) {
      return res.status(404).json({ message: 'Email not found.' });
    }

    res.status(200).json({ message: 'You have been unsubscribed successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
