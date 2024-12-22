import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import backgroundImage from '../assets/cococ.png'; // Path to your image

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);  // To show loading state

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    setLoading(true);  // Show loading while submitting the form
    try {
      const response = await fetch(`${backendURL}/api/contact/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage('Thank you for your message. We have recorded your query and will get back to you soon!');
      } else {
        setResponseMessage(data.error || 'Something went wrong!');
      }
    } catch (error) {
      setResponseMessage('Error sending message. Please try again later.');
    }
    setLoading(false);  // Hide loading after response
  };

  return (
    <div
      className="relative py-16 px-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-55"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <header className="text-center text-white mb-12">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-xl mt-4">Have questions or need help? Reach out to us, and we’ll get back to you as soon as possible.</p>
        </header>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-red-500"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-red-500"
              />
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label className="block text-gray-700">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-red-500"
              >
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Scam Inquiry</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-red-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-red-600 text-white rounded-md hover:bg-red-700"
              disabled={loading}  // Disable button while loading
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
          
          {/* Response message */}
          {responseMessage && <p className="mt-4 text-center text-white">{responseMessage}</p>}
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center text-white">
          <p className="ml-8"><FaEnvelope />support@PhishGuard.com</p>
          <p className="ml-8"><FaPhoneAlt /> 123-456-7890</p>
          <div className="mt-4 ml-8">
            <a href="#" className="mr-4"><FaFacebookF /></a>
            <a href="#" className="mr-4"><FaTwitter /></a>
            <a href="#" className="mr-4"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
