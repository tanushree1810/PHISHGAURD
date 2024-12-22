import nodemailer from 'nodemailer';

// Handle Contact Form
export const handleContactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to admin
    const adminMailOptions = {
      from: email,
      to: process.env.EMAIL_USER,  // Admin email address
      subject: `${subject} - Contact Us Form`,
      text: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER, // Admin email address
      to: email,  // Send confirmation to the user
      subject: 'Your Query has been Recorded',
      text: `Dear ${name},\n\nThank you for contacting us. We have received your query about "${subject}".\n\nOur team will get back to you soon to assist with your inquiry.\n\nBest regards,\nThe Support Team.`,
    };

    // Send email to admin
    await transporter.sendMail(adminMailOptions);

    // Send confirmation email to the user
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ success: 'Message sent successfully. We will get back to you soon.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};
