import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./components/pages/homepage/homePage";
import AboutUs from "./components/pages/about/about_us";
import ServicesPage from "./components/pages/services/servicesPage";

function App() {
  return (
    <>
      <ServicesPage />
    </>
  );
}

export default App;
