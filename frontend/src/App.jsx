import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BrowseScams from './pages/BrowseScams';
import Leaderboard from './pages/Leaderboard';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import JoinUs from './pages/JoinUs';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import ReportScam from './pages/ReportScam';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SafeAccessCenter from './pages/SafeAccessCenter';
import QuizZone from './pages/QuizZone';
import ConnectWithExperts from './pages/ExpertCard';
import ServiceCard from './pages/ServiceCard'


const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/report" element={<ReportScam />} />
        <Route path="/browse" element={<BrowseScams />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="join-us" element={<JoinUs/>} />
        <Route path="privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="terms-of-service" element={<TermsOfService/>}/>
        <Route path="safe-access-center" element={<SafeAccessCenter/>}/>
        <Route path="quiz-zone" element={<QuizZone/>}/>
        <Route path="connect-experts" element={<ConnectWithExperts/>}/>
        <Route path="legal-financial" element={< ServiceCard/>}/>
     
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
