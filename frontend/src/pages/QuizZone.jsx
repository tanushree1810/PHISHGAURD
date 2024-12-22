import React, { useState } from "react";
import { motion } from "framer-motion";

// Importing necessary assets
import phishingImage from "../assets/phishing.png";
import passwordImage from "../assets/password.png";
import quizBgImage from "../assets/quiz-bg.png"; // Background image for quiz zone
import badgeImage from "../assets/badge.png"; // Badge image for rewards
import shareIcon from "../assets/share-icon.png"; // Share result icon
import safeBrowsingImage from "../assets/safe-browsing.png";

const QuizZone = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const quizzes = [
    {
      id: 1,
      title: "Phishing Awareness",
      image: phishingImage,
      description: "Learn how to identify phishing emails and avoid scams.",
      questions: [
        {
          question: "What is a phishing email?",
          options: ["Legitimate email", "Fraudulent email to steal information", "Job offer email"],
          answer: 1,
        },
        {
          question: "Which of the following is a common phishing tactic?",
          options: ["Suspicious email link", "Official website link", "Encrypted message"],
          answer: 0,
        },
        {
          question: "What should you do if you receive an unsolicited email with a link?",
          options: ["Click the link to check", "Report the email to IT", "Ignore it"],
          answer: 1,
        },
        {
          question: "What type of website is typically used for phishing attacks?",
          options: ["Secure website with HTTPS", "A fake website with similar URL", "Government websites"],
          answer: 1,
        },
        {
          question: "What information do phishing attacks typically try to steal?",
          options: ["Personal info and bank details", "Weather forecasts", "News updates"],
          answer: 0,
        },
        {
          question: "Can phishing attacks target mobile phones?",
          options: ["No", "Yes, through SMS and apps", "Only on computers"],
          answer: 1,
        },
        {
          question: "What is a common sign of a phishing email?",
          options: ["A misspelled sender's email address", "Clear branding and logos", "Accurate and professional language"],
          answer: 0,
        },
        {
          question: "What should you do if you suspect an email is phishing?",
          options: ["Click the link and check", "Reply to the email", "Delete it and report it"],
          answer: 2,
        },
        {
          question: "What is spear-phishing?",
          options: ["A phishing attack targeting a specific individual", "Phishing through social media", "Phishing emails disguised as newsletters"],
          answer: 0,
        },
        {
          question: "Which of the following is a safe practice to avoid phishing?",
          options: ["Using two-factor authentication", "Clicking on all email links", "Opening suspicious attachments"],
          answer: 0,
        },
      ],
    },
    {
      id: 2,
      title: "Password Strength",
      image: passwordImage,
      description: "Check how secure your passwords are and improve them.",
      questions: [
        {
          question: "What is a strong password?",
          options: ["12345", "Password123", "X9t9@zL8cP"],
          answer: 2,
        },
        {
          question: "Which of these passwords is most secure?",
          options: ["qwerty", "Password!", "D3F!@FfV"],
          answer: 2,
        },
        {
          question: "What makes a password strong?",
          options: ["Length and variety of characters", "Simple and easy to remember", "Only lowercase letters"],
          answer: 0,
        },
        {
          question: "What is two-factor authentication?",
          options: ["A method to encrypt passwords", "An additional layer of security using a second device", "A password length requirement"],
          answer: 1,
        },
        {
          question: "Which of these should you avoid in passwords?",
          options: ["Using personal information like birthdays", "Mixing uppercase and lowercase letters", "Including special characters"],
          answer: 0,
        },
        {
          question: "How often should you change your password?",
          options: ["Every 6 months", "Once a year", "When you suspect it's compromised"],
          answer: 2,
        },
        {
          question: "What is a password manager used for?",
          options: ["To generate and store passwords securely", "To remember all your passwords", "To avoid using complex passwords"],
          answer: 0,
        },
        {
          question: "Why should you not reuse passwords?",
          options: ["It increases your chances of getting hacked", "It helps you remember your passwords", "It's more convenient"],
          answer: 0,
        },
        {
          question: "What does password hashing do?",
          options: ["Encrypts the password for storage", "Makes it easier to recover passwords", "Turns the password into plain text"],
          answer: 0,
        },
        {
          question: "What is a passphrase?",
          options: ["A short password with numbers", "A sequence of random words used as a password", "A phrase used for encryption"],
          answer: 1,
        },
      ],
    },
    {
      id: 3,
      title: "Safe Browsing",
      image: safeBrowsingImage,
      description: "Learn how to stay safe while browsing the web and protecting your privacy.",
      questions: [
        {
          question: "What does HTTPS mean?",
          options: ["Hypertext Transfer Protocol", "Hypertext Transfer Protocol Secure", "High Traffic Protocol Secure"],
          answer: 1,
        },
        {
          question: "Which of the following is a sign of a secure website?",
          options: ["The website has HTTPS in its URL", "The website has an HTTP URL", "The website looks outdated"],
          answer: 0,
        },
        {
          question: "What should you do if you receive a suspicious link from an unknown sender?",
          options: ["Click the link to check", "Ignore it", "Report it to IT or delete the message"],
          answer: 2,
        },
        {
          question: "What is the main purpose of a VPN?",
          options: ["To protect your identity and data while browsing", "To increase browsing speed", "To prevent pop-up ads"],
          answer: 0,
        },
        {
          question: "Which type of websites should you avoid when browsing?",
          options: ["Unsecured websites", "Websites with a padlock symbol", "Websites with HTTPS"],
          answer: 0,
        },
        {
          question: "How can you recognize a phishing website?",
          options: ["By its URL that looks similar but slightly altered", "By its SSL certificate", "By its green color scheme"],
          answer: 0,
        },
        {
          question: "What is a strong practice for online security while browsing?",
          options: ["Using the same password across all sites", "Enabling two-factor authentication", "Clicking on every ad you see"],
          answer: 1,
        },
        {
          question: "What does 'Incognito mode' do?",
          options: ["Blocks ads", "Prevents your browser from storing history", "Secures your browsing data from websites"],
          answer: 1,
        },
        {
          question: "Which of these is NOT a secure browsing habit?",
          options: ["Using public Wi-Fi for banking", "Opening links from trusted sources", "Not using personal information for login"],
          answer: 0,
        },
        {
          question: "What is the purpose of browser cookies?",
          options: ["To store website preferences and session data", "To track your browsing activity", "To display ads only"],
          answer: 0,
        },
      ],
    },
  ];

  // Handle quiz start
  const startQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setScore(0);
    setCompleted(false);
    setCurrentQuestionIndex(0);
  };

  // Handle quiz completion
  const completeQuiz = () => {
    setCompleted(true);
  };

  // Handle answer selection
  const handleAnswer = (index) => {
    if (selectedQuiz) {
      // Check if the selected answer is correct
      if (index === selectedQuiz.questions[currentQuestionIndex].answer) {
        setScore(prevScore => prevScore + 1); // Increment score if answer is correct
      }

      // Move to the next question
      if (currentQuestionIndex < selectedQuiz.questions.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1); // Move to next question
      } else {
        completeQuiz(); // Complete the quiz when all questions are answered
      }
    }
  };

  // Share functionality
  const handleShare = () => {
    const result = `I scored ${score} / ${selectedQuiz.questions.length} in the quiz!`;
    const url = window.location.href; // You can replace this with your app URL or results page URL

    // For mobile devices, use the Web Share API (modern browsers)
    if (navigator.share) {
      navigator
        .share({
          title: "Quiz Results",
          text: result,
          url: url,
        })
        .then(() => console.log("Successfully shared"))
        .catch(error => console.log("Error sharing:", error));
    } else {
      alert(`Share your results: ${result} \n\n${url}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-black bg-opacity-60">
      {selectedQuiz === null ? (
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-2">Welcome to the Quiz Zone!</h2>
          <p className="mb-6 text-lg">Select a quiz to get started.</p>
  
          {quizzes.map(quiz => (
            <motion.div
              key={quiz.id}
              className="quiz-card mb-4 cursor-pointer"
              onClick={() => startQuiz(quiz)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-4 bg-white rounded-lg shadow-lg text-black">
                {/* Separate the image and paragraph */}
                <div
                  className="mb-4"
                  style={{ backgroundImage: `url(${quiz.image})`, backgroundSize: "cover", backgroundPosition: "center", height: "200px", borderRadius: "8px" }}
                ></div>
                <h3 className="text-2xl font-bold mb-3">{quiz.title}</h3>
                <p className="text-sm">{quiz.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : !completed ? (
        <div className="quiz-container">
          <motion.div
            className="quiz-content text-center bg-white text-black p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold mb-4">{selectedQuiz.title}</h2>
            <p className="mb-6">{selectedQuiz.questions[currentQuestionIndex].question}</p>
            <div className="answer-options mb-6">
              {selectedQuiz.questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className="bg-blue-500 text-white text-lg py-2 px-6 rounded-lg w-full mb-3"
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      ) : (
        <motion.div
          className="quiz-result-container bg-white text-black p-8 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-6">You scored {score} out of {selectedQuiz.questions.length}</p>
  
          {/* Display badge if score is perfect */}
          {score === selectedQuiz.questions.length && (
            <div className="mb-6">
              <img src={badgeImage} alt="Badge" className="w-20 mx-auto" />
              <p className="text-xl text-green-600 mt-2">Congrats! You got a perfect score!</p>
            </div>
          )}
  
          {/* Share result option */}
          <div className="mt-6">
            <button
              onClick={handleShare}
              className="bg-blue-500 text-white text-lg py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Share Your Results
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
  
  export default QuizZone;