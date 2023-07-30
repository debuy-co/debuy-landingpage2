import { useState } from "react";
import Header from "./pages/Home/Header";
import Heading from "./pages/Home/Heading";
import Features from "./pages/Home/Features";
import ContactUs from "./pages/Home/ContactUs";
import Footer from "./pages/Home/Footer";
import Login from "./pages/Login";
import Modal from "./utils/Modal";

function Main() {
  const [loginBoxIsVisible, setLoginBoxIsVisible] = useState(false);

  function changeBoxHandler(e) {
    setLoginBoxIsVisible(true);
    console.log(loginBoxIsVisible); //TODO: vedere come mai questo valore ritorna false
  }

  return (
    <body className="container">
      {loginBoxIsVisible && (
        <Modal>
          <Login />
        </Modal>
      )}

      <Header onLoginClick={changeBoxHandler} />
      <Heading />
      <Features />
      <ContactUs />
      <Footer />
    </body>
  );
}

export default Main;
