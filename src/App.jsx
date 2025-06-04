import React, { useEffect } from "react";
import './index.css'
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Main from "./components/main/Main";
import Class from "./components/class/Class";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Main/>
      <Class/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

// i18next
