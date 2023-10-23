import { useState } from "react";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Features from "../components/Features";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Login from "./Login";
import Modal from "../utils/Modal";

function Home() {
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

export default Home;
