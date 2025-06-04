import React, { useEffect } from "react";
import './index.css'
// import MyComponent from "./components/MyComponent";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Main from "./components/main/Main";
import Class from "./components/class/Class";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
// import Table from "./components/Table";

function App() {
  useEffect(() => {
    // ...
    return () => {};
  }, []);
  return (
    <div>
      {/* <h1>App</h1> */}
      <Header/>
      <Hero/>
      <About/>
      <Main/>
      <Class/>
      <Contact/>
      <Footer/>
      {/* <MyComponent /> */}
      {/* <Table /> */}
    </div>
  );
}

export default App;

// i18next
