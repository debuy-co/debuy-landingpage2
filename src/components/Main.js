import React from "react";
import Header from "./layout/Header";
import Home from "./layout/Home";
import Features from "./layout/Features";
import ContactUs from "./layout/ContactUs";
import Footer from "./layout/Footer";

function Main() {
  return (
    <body className="container">
      <Header />
      <Home />
      <Features />
      <ContactUs />
      <Footer />
    </body>
  );
}

export default Main;
