import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';
import joinImage from '../assets/joinImage.png';  // Add a relevant image for the section


const JoinUs = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${joinImage})` ,
         // This scales the image to 50% of the container
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
          height: '150vh'
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="text-center text-white px-6 py-8 bg-opacity-80 rounded-lg max-w-lg mx-auto">
          <h1 className="text-4xl font-bold mb-4">Join Us Today!</h1>
          <p className="text-xl mb-6">
            Be part of our growing community. We’re always looking for passionate people to join our team and make a difference.
          </p>
          <a
            href="/login"
            className="px-6 py-3 bg-red-600 text-white text-lg rounded-md hover:bg-red-700 transition-all"
          >
            Apply Now
          </a>
        </div>
      </div>

     

      {/* Additional Information Section */}
      <div className="py-16 text-white text-center bg-gray-800">
        <h2 className="text-3xl font-semibold mb-4">Why Join Us?</h2>
        <p className="mb-6">
          We're more than just a workplace – we're a community of innovators, creators, and go-getters. Join us and help us build a brighter future.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <FaUser className="text-4xl text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Inclusive Culture</h3>
            <p>We value diversity and provide a collaborative environment where everyone can thrive.</p>
          </div>
          <div>
            <FaEnvelope className="text-4xl text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Great Benefits</h3>
            <p>From health insurance to paid time off, we offer competitive benefits that support your well-being.</p>
          </div>
          <div>
            <FaPhoneAlt className="text-4xl text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
            <p>We support your professional development with mentorship and training opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
