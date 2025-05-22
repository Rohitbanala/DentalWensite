import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./components/pages/homepage/homePage";
import AboutUs from "./components/pages/about/about_us";
import ServicesPage from "./components/pages/services/servicesPage";
import ContactUs from "./components/pages/contact_us/contact_us_page";

function App() {
  return (
    <>
      <ContactUs />
    </>
  );
}

export default App;
