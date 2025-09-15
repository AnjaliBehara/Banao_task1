import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Groups from "./components/Groups";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Groups />
      <Features />
      <Footer />
    </>
  );
}

export default App;
