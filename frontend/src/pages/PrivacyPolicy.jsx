import React, { useState } from "react";
import Policy from '../assets/Policy.png'
const PrivacyPolicy = () => {


  return (
    <div >
    
      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6 space-y-10">
        {/* Introduction Section */}
        <section className="text-center">
          <div className=" p-6 ">
            <h2 className=" text-red-600 text-2xl font-semibold mb-2">Your Privacy, Our Priority</h2>
            <p className="text-black">
              At PHISHGUARD, we prioritize your privacy by ensuring your data is secure and scammers are kept at bay.
            </p>
          </div>
          
          <img
            src={Policy}
            alt="Privacy and Security"
            className="w-1/4 mx-auto mt-6 "
          />
        </section>

        {/* Expandable Sections */}
        <section className="space-y-6">
          {[
            {
              title: "What Information We Collect",
              icon: "🔍",
              content: `
                •Your email address to send scam alerts
                • Browsing activity to detect phishing patterns
                • Device and IP address for enhanced security.
              `,
            },
            {
              title: "How We Use Your Data",
              icon: "⚙️",
              content: `
                • To provide real-time scam detection
                • To send personalized scam alerts
                • To improve our scam-blocking algorithms
              `,
            },
            {
              title: "Your Data Rights",
              icon: "✔️",
              content: `
                • Request a copy of your data
                • Delete your account anytime
                • Opt-out of notifications
              `,
            },
          ].map((section, idx) => (
            <CollapsibleSection key={idx} title={section.title} icon={section.icon} content={section.content} />
          ))}
        </section>

        {/* Data Rights Progress Bar */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Your Data Rights Progress</h3>
          <div className="bg-gray-200 rounded-full h-4">
            <div className="bg-red-400 h-4 rounded-full" style={{ width: "75%" }}></div>
          </div>
          <p className="mt-2 text-sm text-gray-500">You’ve exercised 75% of your data rights.</p>
          {/* Suggested graphic: People interacting with data controls */}
        </section>

        {/* Scam Example Gallery */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Common Scam Examples</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-bold">Email Phishing</h4>
              <p className="text-sm">Fake emails pretending to be from your bank.</p>
              {/* Suggested image: Fake email with "Scam Alert" */}
            </div>
            <div className="bg-red-50 p-4 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-bold">SMS Phishing</h4>
              <p className="text-sm">Messages with malicious links.</p>
              {/* Suggested image: Text message with warning */}
            </div>
            <div className="bg-red-50 p-4 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-bold">Website Spoofing</h4>
              <p className="text-sm">Fake websites mimicking trusted brands.</p>
              {/* Suggested image: Website with "Scam Detected" banner */}
            </div>
            <div className="bg-red-50 p-4 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-bold">Phone Call Scams</h4>
              <p className="text-sm">Calls pretending to be tech support.</p>
              {/* Suggested image: Phone call with warning */}
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
};

const CollapsibleSection = ({ title, icon, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg p-4 shadow">
      <button
        className="w-full text-left font-semibold text-lg flex items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        <span>{icon} {title}</span>
        <span>{open ? "▲" : "▼"}</span>
      </button>
      {open && <div className="mt-4 text-sm text-gray-600">{content}</div>}
    </div>
  );
};

export default PrivacyPolicy;
