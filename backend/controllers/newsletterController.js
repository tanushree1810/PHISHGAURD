import cron from 'node-cron';
import Subscriber from '../models/Subscriber.js';
import transporter from './subscriberController.js'; // Use the same transporter

export const sendNewsletter = async () => {
  try {
    const subscribers = await Subscriber.find({});
    const emails = subscribers.map((subscriber) => subscriber.email);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      bcc: emails,
      subject: 'PhishGuard Monthly Newsletter',
      template: 'newsletter',
      context: { date: new Date().toLocaleDateString() },
    };

    await transporter.sendMail(mailOptions);
    console.log('Newsletter sent to all subscribers.');
  } catch (error) {
    console.error('Error sending newsletter:', error);
  }
};

// Schedule the newsletter to be sent every month on the 1st at 8 AM
cron.schedule('0 8 1 * *', sendNewsletter);
