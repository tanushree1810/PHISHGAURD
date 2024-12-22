import React from 'react'; 
import { Link } from 'react-router-dom';
import hero from "../assets/hero.png";
import reportImage from "../assets/report.png"; // Add the report image import
import browseImage from "../assets/browse.png"; // Add the browse image import
import joinImage from "../assets/join.png"; // Add the join image import

const Hero = () => {
  return (
    <section className="flex items-center justify-between p-10">
      {/* Hero Right (Text Section) */}
      <div className="flex-1 pr-5 pl-5">
        <h1 className="text-4xl font-semibold mb-4 text-gray-800">
          Spot the <span className="text-red-600">Scam</span> Before It’s Too Late!
        </h1>
        <p className="text-lg mb-6 text-gray-600">
          Scam Alert is a community-driven platform that helps people identify, report, and avoid scams. Together, we can create a safer online environment.
        </p>
        <div className="flex flex-col gap-6">
          {/* Report a Scam Button with Image */}
          <div className="flex items-center gap-3">
            <img src={reportImage} alt="Report Scam" className="w-8 h-8" />
            <Link to="/report" className="w-full py-4 px-6 bg-red-600 text-white rounded-lg text-lg text-center hover:bg-red-700 transition duration-300">
              Report a Scam
            </Link>
          </div>
          
          {/* Browse Latest Alerts Button with Image */}
          <div className="flex items-center gap-3">
            <img src={browseImage} alt="Browse Alerts" className="w-8 h-8" />
            <Link to="/browse" className="w-full py-4 px-6 bg-yellow-700 text-white rounded-lg text-lg text-center hover:bg-yellow-800 transition duration-300">
              Browse Latest Alerts
            </Link>
          </div>
          
          {/* Join Us Button with Image */}
          <div className="flex items-center gap-3">
            <img src={joinImage} alt="Join Us" className="w-8 h-8" />
            <Link to="/join-us" className="w-full py-4 px-6 bg-green-600 text-white rounded-lg text-lg text-center hover:bg-green-700 transition duration-300">
              Join Us
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Left (Image Section) */}
      <div className="flex-1 pl-5 pr-5">
        <img src={hero} alt="Scam Alert Hero" className="w-4/5 h-auto mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
