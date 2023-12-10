import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavbar from "./common/TopNavbar";
import Home from "./components/HomeSection/Home";
import Footer from "./common/Footer";
import Templates from "./components/templates/Templates";
import Features from "./components/features/Features";
import Learn from "./components/blog/Learn";
import LearnDetails from "./components/blog/LearnDetails";
import Price from "./components/price/Price";
import Login from "./common/Login";
import Signup from "./common/Signup";
import ForgotPass from "./common/ForgotPass";
import Contact from "./components/contact/Contact";
import Terms from "./components/terms&conditions/Terms";
import Privacy from "./components/privacy/Privacy";
import Refund from "./components/privacy/Refund";
import Cookie from "./components/privacy/Cookie";
import Editor from "./common/Editor";
import HelpCenter from "./components/privacy/HelpCenter";
import HelpDetails from "./components/privacy/HelpDetails";
import WhatsNew from "./components/whatsNew/WhatsNew";
import Revew from "./components/reviews/Revew";
import Account from "./components/account/Account";
import About from "./components/about/About";
import CreateImg from "./components/createImg/CreateImg";

const App = () => {
  return (
    <>
      <Router>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/create-image" element={<CreateImg />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/features" element={<Features />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn-details" element={<LearnDetails />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/refund-policy" element={<Refund />} />
          <Route path="/cookie-policy" element={<Cookie />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/help-details" element={<HelpDetails />} />
          <Route path="/whats-new" element={<WhatsNew />} />
          <Route path="/reviews" element={<Revew />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
