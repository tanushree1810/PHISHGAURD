import React from 'react';
import help from '../assets/helplie.png';

const HelplineSection = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-center">
          <h2 className="text-4xl font-semibold mb-4">Cyber Attack Helpline: India</h2>
          <p className="text-lg text-gray-700 mb-6">
            In case you encounter any cyber attack or online fraud, you can contact the helpline number below for immediate assistance and guidance.
          </p>
          <p className="text-4xl text-center font-bold  text-red-500  lg:text-cennter">
            Helpline Number: 1930
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-left ">
          <img
            src={help}
            alt="Cyber Attack Helpline"
            className="w-3/4 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HelplineSection;
