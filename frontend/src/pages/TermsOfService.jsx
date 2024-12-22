import React, { useState } from "react";
import TOSImage from "../assets/termsOfServices.png";

const TermsOfService = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Header */}
      <div className="text-center py-10 ">
        <h1 className="text-3xl font-bold text-red-600">PHISHGUARD Terms of Service</h1>
        <p className="mt-4 text-lg">
        By accessing or using PHISHGUARD, you agree to comply with these terms. Please read them carefully to understand your rights and responsibilities.
        </p>
        {/* Suggested image: Agreement handshake or shield */}
        <img
          src={TOSImage}
          alt="Terms of Service"
          className="w-1/12 mx-auto mt-6 "
        />
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-2 px-6 space-y-12">

        {/* Interactive Sections */}
        <section>
          <h3 className="text-xl font-serif text-center text-gray-800 mb-6">KEY HIGHLIGHTS OF OUR TERMS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Account Responsibility",
                content: "You are responsible for maintaining the confidentiality of your login credentials.",
                icon: "🛡️",
                bgColor: "bg-red-50",
              },
              {
                title: "Prohibited Activities",
                content: "Using PHISHGUARD to harm others, disrupt networks, or bypass security is strictly prohibited.",
                icon: "🚫",
                bgColor: "bg-red-50",
              },
              {
                title: "Data Usage Policy",
                content: "We use your data only to enhance your security and deliver better services.",
                icon: "📊",
                bgColor: "bg-red-50",
              },
              {
                title: "Updates to the Terms",
                content: "PHISHGUARD may update these terms periodically. We’ll notify you of significant changes.",
                icon: "🔄",
                bgColor: "bg-red-50",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`${item.bgColor} p-6 rounded-lg shadow hover:shadow-lg transition`}
              >
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <span>{item.icon}</span> {item.title}
                </h4>
                <p className="mt-2 text-sm text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {[
              {
                question: "What happens if I violate the terms?",
                answer: "Violations may lead to suspension or termination of your account, depending on the severity.",
              },
              {
                question: "Can I use PHISHGUARD for business purposes?",
                answer: "Yes, but commercial use is subject to additional licensing terms. Contact us for details.",
              },
              {
                question: "How do I report a phishing attempt?",
                answer: "Use the 'Report' feature in the app or email us at report@phishguard.com.",
              },
            ].map((faq, idx) => (
              <details key={idx} className="border rounded-lg p-4">
                <summary className="cursor-pointer font-semibold text-lg">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* User Commitment Section */}
        <section className="text-center py-2 rounded-lg">
          <h3 className="text-2xl font-semibold text-red-500">Your Commitment to PHISHGUARD</h3>
          <p className="mt-4 pb-6 text-black">
            By using PHISHGUARD, you agree to actively protect yourself and others from phishing and scams. Together, we can make the internet a safer place.
          </p>
        </section>
      </div>

    </div>
  );
};

export default TermsOfService;
