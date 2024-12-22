import { motion } from "framer-motion";
import { FaShieldAlt, FaGavel, FaMoneyBillAlt } from "react-icons/fa";
import imageCyberSecurity from '../assets/cybersecurity.png';
import imageLegal from '../assets/legal.png';
import imageFraud from '../assets/fraud.png';

const ExpertCard = ({ icon, title, description, link }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-center">
      <div className="text-4xl mb-4 flex justify-center items-center">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-800 font-semibold transition-all duration-300"
      >
        Connect Now
      </a>
    </div>
  </motion.div>
);

const ConnectWithExperts = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl font-semibold text-red-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Connect with Experts
        </motion.h2>
        
      </div>

      <div className="flex justify-center gap-8">
        <ExpertCard
          icon={<FaShieldAlt />}
          title="Cybersecurity Experts"
          description="For technical recovery from cyber attacks and securing your systems."
          link="https://www.pwc.in/consulting/risk-consulting/cybersecurity/partner-profiles.html"
        />
        <ExpertCard
          icon={<FaGavel />}
          title="Legal Advisors"
          description="Specialized in cybercrime cases and protecting your legal rights."
          link="https://www.leadindia.law/cyber-fraud-lawyers/delhi"
        />
        <ExpertCard
          icon={<FaMoneyBillAlt />}
          title="Fraud Recovery Experts"
          description="Resolve financial losses and recover your assets from fraud."
          link="https://www.ecsinfotech.com/financial-fraud-investigation/"
        />
      </div>

      <div className="mt-16 text-center">
        <motion.h3
          className="text-3xl font-semibold text-red-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Important Authorities to Contact
        </motion.h3>

        <div className="flex justify-center gap-8">
          {/* Authority Card 1 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 w-96 flex items-center hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={imageCyberSecurity} alt="Cybersecurity" className="h-24 w-24 mr-4" />
            <div>
              <h4 className="font-semibold text-xl text-red-600">CERT-In</h4>
              <p className="text-gray-600">Indian Computer Emergency Response Team</p>
              <a
                href="https://www.cert-in.org.in/"
                className="text-red-600 font-semibold mt-2 inline-block"
              >
                Visit Website
              </a>
            </div>
          </motion.div>

          {/* Authority Card 2 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 w-96 flex items-center hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={imageLegal} alt="Legal" className="h-24 w-24 mr-4" />
            <div>
              <h4 className="font-semibold text-xl text-red-600">Cybercrime Cell</h4>
              <p className="text-gray-600">Your local police's Cybercrime department</p>
              <a
                href="https://www.cybercrime.gov.in/"
                className="text-red-600 font-semibold mt-2 inline-block"
              >
                Visit Website
              </a>
            </div>
          </motion.div>

          {/* Authority Card 3 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 w-96 flex items-center hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={imageFraud} alt="Sancharsaathi - Cybercrime Complaint Portal" className="h-24 w-24 mr-4" />
            <div>
              <h4 className="font-semibold text-xl text-red-600">Sancharsaathi</h4>
              <p className="text-gray-600">Report cybercrimes and get assistance through India's official platform, Sancharsaathi.</p>
              <a
                href="https://sancharsaathi.gov.in/sfc/#:~:text=Note%3A%20If%20you%20have%20already,.cybercrime.gov.in."
                className="text-red-600 font-semibold mt-2 inline-block"
              >
                Visit Website
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* New Authority Card for Important Government Links */}
      <div className="mt-16 text-center">
        <motion.h3
          className="text-3xl font-semibold text-red-600 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Important Government Websites
        </motion.h3>

        <motion.div
          className="p-12 mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.mha.gov.in/en/divisionofmha/cyber-and-information-security-cis-division"
                className="block text-white bg-red-500 py-2 px-4 rounded-full hover:bg-red-800 transition-all duration-300"
              >
                Cyber and Information Security Division - MHA
              </a>
            </li>
            <li>
              <a
                href="https://cybercrime.gov.in/"
                className="block  text-white bg-red-500 py-2 px-4 rounded-full hover:bg-red-800 transition-all duration-300"
              >
                National Cybercrime Reporting Portal
              </a>
            </li>
            <li>
              <a
                href="https://www.meity.gov.in/cyber-security-division"
                className="block text-white bg-red-500 py-2 px-4 rounded-full hover:bg-red-800 transition-all duration-300"
              >
                Cybersecurity Division - MeitY
              </a>
            </li>
            <li>
              <a
                href="https://services.india.gov.in/service/detail/national-cyber-crime-reporting-portal"
                className="block text-white bg-red-500 py-2 px-4 rounded-full hover:bg-red-800 transition-all duration-300"
              >
                National Cyber Crime Reporting Portal (India)
              </a>
            </li>
            <li>
              <a
                href="https://www.csk.gov.in/"
                className="block text-white bg-red-500 py-2 px-4 rounded-full hover:bg-red-800 transition-all duration-300"
              >
                Cyber Swachhta Kendra (CSK)
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ConnectWithExperts;
