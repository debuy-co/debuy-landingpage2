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

  function showLoginBox(e) {
    setLoginBoxIsVisible(true);
    console.log(loginBoxIsVisible); //TODO: vedere come mai questo valore ritorna false
  }

  function hideLoginBox(e) {
    setLoginBoxIsVisible(false);
  }

  return (
    <body className="container">
      {/*here I add the function "hideLoginBox" to both Modal and Login component because both of them need to have this capability, one for closing by clicking on the background the other by clicking on the X button*/}
      {loginBoxIsVisible && (
        <Modal onBackgroundclick={hideLoginBox}>
          <Login onButtonclick={hideLoginBox} />
        </Modal>
      )}

      <Header onLoginClick={showLoginBox} />
      <Heading />
      <Features />
      <ContactUs />
      <Footer />
    </body>
  );
}

export default Main;
