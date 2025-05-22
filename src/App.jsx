import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/pages/homepage/homePage";
import AboutUs from "./components/pages/about/about_us";
import ServicesPage from "./components/pages/services/servicesPage";
import ContactUs from "./components/pages/contact_us/contact_us_page";
import Header from "./components/common_components/header/header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
