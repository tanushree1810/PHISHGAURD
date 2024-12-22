import React from "react";
import aboutImage from "../assets/aboutImage.png"; // Example image placeholder

const AboutUs = () => {
  return (
    <section
      className="relative py-12 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(220, 38, 38, 0.8), rgba(239, 68, 68, 0.8)), url(${aboutImage})`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-white">
        {/* Section Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight">
            About PhishGaurd
          </h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
          PhishGaurd is more than just a platform. It's a community-driven
            effort to identify, report, and avoid scams. Our mission is to
            create a safer online environment for everyone, one scam at a time.
          </p>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Section */}
          <div className="bg-red-800/75 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-gray-200 mt-4">
              Our goal is to empower users with the knowledge and tools they
              need to avoid scams. By reporting scams and sharing knowledge, we
              aim to create a community where everyone can stay informed and
              protected.
            </p>
          </div>

          {/* How It Works */}
          <div className="bg-red-800/75 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">How It Works</h3>
            <p className="text-gray-200 mt-4">
              Simply report a scam you've encountered, upvote useful reports,
              and help others stay informed. Together, we create a stronger
              defense against online fraud.
            </p>
          </div>

          {/* Community and Safety */}
          <div className="bg-red-800/75 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Community and Safety</h3>
            <p className="text-gray-200 mt-4">
            PhishGaurd relies on our active community to make the platform
              valuable. Our moderators review each report to ensure the content
              is accurate, and your privacy is protected.
            </p>
          </div>

          {/* Team Section */}
          <div className="bg-red-800/75 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Meet the Team</h3>
            <p className="text-gray-200 mt-4">
            PhishGaurd was founded by a group of passionate individuals who
              want to make the internet a safer place for everyone. Our team is
              committed to continuously improving the platform and ensuring a
              safe online space.
            </p>
          </div>
        </div>

        {/* Why It Matters Section */}
        <div className="mt-12 bg-red-700/90 p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-3xl font-bold">Why It Matters</h3>
          <p className="text-gray-200 mt-4">
            Scams are constantly evolving, and it's up to all of us to stay
            ahead. Join our community to report, learn, and protect yourself and
            others.
          </p>
          {/* Call to Action Button */}
          <div className="mt-6">
            <a
              href="/register"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition duration-200"
            >
              Join the Fight Against Scams
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
