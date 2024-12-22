import React, { useState } from "react";
import faqImage from '../assets/faqImage.png'

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Spider Alert?",
      answer:
        "Spider Alert is a community-driven platform that helps people identify, report, and avoid scams. Together, we work to make the internet safer for everyone.",
    },
    {
      question: "How do I report a scam?",
      answer:
        'You can report a scam by clicking on the "Report Scam" button at the top of the page. You’ll be asked to provide details about the scam, including any evidence and how it affected you.',
    },
    {
      question: "How are scam reports verified?",
      answer:
        "Our team of moderators reviews all scam reports before they are published. We check for accuracy and ensure that the scam is relevant and impactful.",
    },
    {
      question: "What types of scams can I report?",
      answer:
        "You can report any type of scam, including phishing, fake job offers, romance scams, tech support scams, and more. We provide options to categorize your report accordingly.",
    },
    {
      question: "How do I know if a scam is real or not?",
      answer:
        'If you are unsure whether something is a scam, check our "Trending Scams" section to see if others have reported similar incidents. You can also use our search feature to look up specific scams.',
    },
    {
      question: "How can I stay safe online?",
      answer:
        "We provide resources on how to identify scams and stay safe. You can also join our community discussions for tips on online security.",
    },
    {
      question: "Can I remain anonymous when reporting a scam?",
      answer:
        "Yes, you can remain anonymous when reporting a scam. You will be asked for your consent before any personal details are shared.",
    },
    {
      question: "What should I do if I fall victim to a scam?",
      answer:
        "If you’ve fallen victim to a scam, we encourage you to report it immediately and reach out to the relevant authorities for help.",
    },
  ];

  const [expanded, setExpanded] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section
      className="relative py-8 bg-cover bg-center"
      style={{
        backgroundImage: `url(${faqImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        filter: "brightness(0.7)",
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-80"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-200 mt-4">
          Got a question? We’ve got answers. Find quick solutions to common inquiries below.
        </p>

        {/* Search Bar */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full max-w-md mx-auto px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* FAQs */}
        <div className="mt-10 space-y-6">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full text-left px-4 py-3 flex justify-between items-center font-medium text-blue-900 hover:bg-blue-50 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span
                  className={`transition-transform transform ${
                    expanded === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              {expanded === index && (
                <div className="px-4 py-3 text-gray-600 bg-blue-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <p className="text-gray-200">
            Still have questions?{" "}
            <a
              href="/contact"
              className="text-blue-200 hover:underline font-medium"
            >
              Contact us
            </a>{" "}
            or visit our{" "}
            <a
              href="/help-center"
              className="text-blue-200 hover:underline font-medium"
            >
              Help Center
            </a>{" "}
            for more detailed guides.
          </p>
        </div>

        {/* Support Links */}
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="/privacy-policy"
            className="text-gray-200 hover:text-blue-400 transition"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-gray-200 hover:text-blue-400 transition"
          >
            Terms & Conditions
          </a>
          <a
            href="/community-guidelines"
            className="text-gray-200 hover:text-blue-400 transition"
          >
            Community Guidelines
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;