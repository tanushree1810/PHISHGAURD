import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Import all assets explicitly
import emailScannerImage from "../assets/email-scanner.png";
import passwordStrengthImage from "../assets/password-strength.png";
import linkValidatorImage from "../assets/link-validator.png";
import quizZoneImage from "../assets/quiz-zone.png";
import scamAwarenessImage from "../assets/scam-awareness.png";
import heatmapImage from "../assets/scam-heatmap.png";
import expertsImage from "../assets/experts.png";
import legalFinancialImage from "../assets/legal-financial.png";
import supportChatImage from "../assets/support-chat.png";

const SafeAccessCenter = () => {
  const cards = [
    {
      id: 1,
      title: "Email Scanner",
      description:
        "Upload suspicious emails for phishing detection and get quick results.",
      buttonText: "Scan Emails",
      link: "https://tanushree1810-email-spam-detector-app-elpnuf.streamlit.app/",
      image: emailScannerImage,
    },
    {
      id: 2,
      title: "Rate My Password Strength",
      description:
        "Check how strong your passwords are with our advanced security tools.",
      buttonText: "Check Password",
      link: "https://password-react-h7c66bx2z-tanushrees-projects-7b947c7e.vercel.app/",
      image: passwordStrengthImage,
    },
    {
      id: 3,
      title: "Link Validator",
      description:
        "Validate URLs to ensure they're safe before clicking on them.",
      buttonText: "Validate Links",
      link: "https://phishgaurdlinkvalidator.streamlit.app/", // Internal link to be implemented
      image: linkValidatorImage,
    },
    {
      id: 4,
      title: "Quiz Zone",
      description:
        "Test your scam awareness by taking fun, interactive quizzes.",
      buttonText: "Take Quiz",
      link: "/quiz-zone", // Internal link
      image: quizZoneImage,
    },
    {
      id: 5,
      title: "Connect with Experts",
      description:
        "Get in touch with cybersecurity experts, legal advisors, and fraud recovery specialists.",
      buttonText: "Connect Now",
      link: "/connect-experts",
      image: expertsImage,
    },
    {
      id: 6,
      title: "Legal and Financial Support",
      description:
        "Access legal and financial resources for scam recovery and assistance.",
      buttonText: "Get Support",
      link: "/legal-financial",
      image: legalFinancialImage,
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Safe Access Center
      </motion.h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center space-x-6">
              {/* Image Section (Left) */}
              <div className="w-1/3">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              {/* Text Section (Right) */}
              <div className="w-2/3">
                <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
                <p className="text-gray-600 mb-4">{card.description}</p>
                {card.link.startsWith("http") ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded-full block mx-auto text-center hover:bg-green-600 transition-colors"
                  >
                    {card.buttonText}
                  </a>
                ) : (
                  <Link
                    to={card.link}
                    className="bg-green-500 text-white px-4 py-2 rounded-full block mx-auto text-center hover:bg-green-600 transition-colors"
                  >
                    {card.buttonText}
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Support Chat Section with Image on the Left */}
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-6 mt-8 max-w-lg mx-auto"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={supportChatImage}
          alt="Support Chat"
          className="w-34 h-48 object-contain" // Reduced image size and kept aspect ratio
        />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">Support Chat</h2>
          <p className="text-gray-600 mb-4">
            Instant access to a help center or chatbot for scam-related questions.
          </p>
          <a
            href="https://chatbot-frontend-hsiywdk61-tanushrees-projects-7b947c7e.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors text-lg"
          >
            Chat Now
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SafeAccessCenter;
