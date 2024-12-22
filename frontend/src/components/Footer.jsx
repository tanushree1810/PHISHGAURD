import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';  // Import Toastify
import 'react-toastify/dist/ReactToastify.css';  // Import Toastify CSS

const Footer = () => {
  // Store backend URL in a variable
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${backendUrl}/api/subscribers/subscribe`, { email });
      setMessage(response.data.message); // Success message
      setEmail('');
      
      // Display a success toast message
      toast.success('Subscription successful! Thank you for subscribing.');
    } catch (error) {
      setMessage('An error occurred. Please try again.'); // Error message

      // Display an error toast message
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p>Email: <a href="mailto:support@spideralert.com" className="hover:text-yellow-500">support@PhishGuard.com</a></p>
            <p>Phone: <a href="tel:+15551234567" className="hover:text-yellow-500">+91 8877668890</a></p>
            <p>Address: 123 Saket, New Delhi-110017</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
              <li><Link to="/report" className="hover:text-yellow-500">Report a Scam</Link></li>
              <li><Link to="/browse" className="hover:text-yellow-500">Browse Scams</Link></li>
              <li><Link to="/faq" className="hover:text-yellow-500">FAQ</Link></li>
              <li><Link to="/about" className="hover:text-yellow-500">About Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-yellow-500">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <ul className="space-y-2">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">LinkedIn</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <p className="mb-4">Subscribe to our newsletter for the latest scams, security tips, and updates.</p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-md text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700"
              >
                Subscribe
              </button>
            </form>
            {message && <p className="mt-4 text-sm text-gray-300">{message}</p>}
          </div>
        </div>

        {/* Legal and Privacy */}
        <div className="text-center text-gray-400 text-sm mt-10">
          <p>© 2024 PhishGaurd. All rights reserved.</p>
          <div className="space-x-4 mt-2">
            <Link to="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-yellow-500">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-yellow-500">Cookie Policy</Link>
          </div>
        </div>
      </div>

      {/* Toast Container to show toast messages */}
      <ToastContainer />
    </footer>
  );
};

export default Footer;
