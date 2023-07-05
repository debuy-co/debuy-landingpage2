import { useState } from "react";
import Header from "./pages/Home/Header";
import Heading from "./pages/Home/Heading";
import Features from "./pages/Home/Features";
import ContactUs from "./pages/Home/ContactUs";
import Footer from "./pages/Home/Footer";

function Main() {
  const [loginBoxIsVisible, setLoginBoxIsVisible] = useState(false);
  return (
    <body className="container">
      <Header />
      <Heading />
      <Features />
      <ContactUs />
      <Footer />
    </body>
  );
}

export default Main;
