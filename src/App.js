import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/jsx/LandingPage";
import FormPage from "./pages/landingPage/jsx/FormPage";
import AboutPage from "./pages/landingPage/jsx/AboutPage";
import ContactPage from "./pages/landingPage/jsx/ContactPage";
import VideoPage from "./pages/guidance/jsx/VideoPage";
import NotFoundPage from "./pages/landingPage/jsx/NotFoundPage";
import ThanksPage from "./pages/thanks/jsx/ThanksPage";
import "./styles/globals.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/thanks" element={<ThanksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
