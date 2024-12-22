import { motion } from "framer-motion";
import { FaGavel, FaDollarSign, FaBalanceScale } from "react-icons/fa";
import imageLegal from '../assets/legal.png'; // Example image for Legal Support
import imageFinancial from '../assets/financial-support.png'; // Example image for Financial Support

const ServiceCard = ({ icon, title, description, link, image }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-all duration-300 max-w-xs mx-auto"
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <img src={image} alt={title} className="w-16 h-16 mx-auto mb-4 rounded-full shadow-lg" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-800 font-semibold transition-all duration-300"
      >
        Learn More
      </a>
    </div>
  </motion.div>
);

const LegalAndFinancialSupport = () => {
  return (
    <div className="bg-gray-100 py-16">
      {/* Header Section */}
      <div className="container mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl font-semibold text-red-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Legal & Financial Support
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Access legal and financial resources for scam recovery and assistance.
        </motion.p>
      </div>

      {/* Legal Support Section */}
      <div className="container mx-auto text-center my-12">
        <motion.h3
          className="text-2xl font-semibold text-red-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Legal Support
        </motion.h3>
        
        <div className="  grid md:grid-cols-2 gap-8">
          {/* Cybercrime Law Experts */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaGavel className="text-4xl text-red-600 mb-4 " />
            <h4 className="font-semibold text-xl mb-2">Cybercrime Law Experts</h4>
            <p className="text-gray-600 mb-4">
              Specialists in online fraud, identity theft, phishing, and more. They guide you through reporting the scam and pursuing legal actions.
            </p>
            <a
              href="https://www.cybercrime.gov.in/"
              className="text-red-600 font-semibold"
            >
              Find a Cybercrime Lawyer
            </a>
          </motion.div>

          {/* Reporting Cybercrime */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaBalanceScale className="text-4xl text-red-600 mb-4" />
            <h4 className="font-semibold text-xl mb-2">Reporting Cybercrime</h4>
            <p className="text-gray-600 mb-4">
              Report your scam to local Cybercrime Cells or the Economic Offenses Wing. Ensure you have all evidence like emails or screenshots.
            </p>
            <a
              href="https://www.cybercrime.gov.in/"
              className="text-red-600 font-semibold"
            >
              Report Cybercrime
            </a>
          </motion.div>
        </div>
      </div>

      {/* Financial Support Section */}
      <div className="container mx-auto text-center my-12">
        <motion.h3
          className="text-2xl font-semibold text-red-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Financial Support
        </motion.h3>
        

        <div className="grid md:grid-cols-2 gap-8">
          {/* Fraud Recovery Services */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaDollarSign className="text-4xl text-red-600 mb-4" />
            <h4 className="font-semibold text-xl mb-2">Fraud Recovery Services</h4>
            <p className="text-gray-600 mb-4">
              These services can help track down and recover stolen funds. They use legal action and asset tracing to get your money back.
            </p>
            <a
              href="https://ecsinfotech.com/"
              className="text-red-600 font-semibold"
            >
              Learn About Fraud Recovery
            </a>
          </motion.div>

          {/* Insurance Claims for Fraud */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaDollarSign className="text-4xl text-red-600 mb-4" />
            <h4 className="font-semibold text-xl mb-2">Insurance Claims for Fraud</h4>
            <p className="text-gray-600 mb-4">
              If your insurance covers fraud-related losses, file a claim with your provider. Ensure all necessary documentation is provided.
            </p>
            <a
              href="https://www.insurance.gov.in/"
              className="text-red-600 font-semibold"
            >
              Contact Your Insurance Provider
            </a>
          </motion.div>
        </div>
      </div>

      {/* Additional Steps for Scam Victims */}
      <div className="container mx-auto text-center my-12">
        <motion.h3
          className="text-2xl font-semibold text-red-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Additional Steps for Scam Victims
        </motion.h3>
       

        <div className="grid md:grid-cols-2 gap-8">
          {/* Lock Accounts */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-semibold text-xl mb-2">Immediately Lock Accounts</h4>
            <p className="text-gray-600 mb-4">
              If your bank or credit card information is compromised, lock accounts to prevent further transactions.
            </p>
            <a
              href="#"
              className="text-red-600 font-semibold"
            >
              Contact Your Financial Institutions
            </a>
          </motion.div>

          {/* Monitor Credit */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-semibold text-xl mb-2">Monitor Your Credit</h4>
            <p className="text-gray-600 mb-4">
              Keep a close eye on your credit score using free services. Look for unauthorized activity.
            </p>
            <a
              href="https://www.experian.com/consumer-products/credit-report"
              className="text-red-600 font-semibold"
            >
              Check Your Credit
            </a>
          </motion.div>
        </div>
      </div>

      {/* Useful Resources */}
      <div className="container mx-auto text-center my-12">
        <motion.h3
          className="text-2xl font-semibold text-red-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Useful Resources
        </motion.h3>
        

        <div className="grid md:grid-cols-3 gap-8 justify-center">
          <ServiceCard
           
            title="Cybercrime Cell"
            description="Report cybercrimes and scams."
            link="https://www.cybercrime.gov.in/"
            image={imageLegal}
          />
          <ServiceCard
            
            title="Fraud Recovery"
            description="Access fraud recovery services."
            link="https://ecsinfotech.com/"
            image={imageFinancial}
          />
          <ServiceCard
          
            title="Legal Help"
            description="Consult with legal professionals."
            link="https://www.cybercrime.gov.in/"
            image={imageLegal}
          />
        </div>
      </div>
    </div>
  );
};

export default LegalAndFinancialSupport;
