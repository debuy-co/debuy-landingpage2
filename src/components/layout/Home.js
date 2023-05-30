import React from "react";
import Image from "../../assets/img/aron.jpg";
import Image2 from "../../assets/img/nik-removebg-preview.png";

function Home() {
  return (
    <section className="home">
      <h3 className="heading-3 home__order1">Why Debuy ?</h3>
      <h1 className="heading-1 home__order2">Decentralized Contracts</h1>
      <h5 className="heading-5 home__order3">
        DEBUY is on a mission to revolutionize the procurement industry through
        the use of web3 technologies. We strive to provide a decentralized and
        secure platform that empowers businesses and individuals to buy and sell
        goods and services without the need for intermediaries. Our goal is to
        foster a more efficient, transparent, and inclusive procurement
        ecosystem that benefits all participants.
      </h5>
      <div class="vl"></div>

      <div className="home__image-box">
        <img src={Image2} alt="Abstract" className="home__image" />{" "}
        {/*TODO: da sistemare con una immagine piu appropriata*/}
      </div>
      <button className="btn-light btn-light-home">more info</button>
      <button className="btn-dark btn-dark-home">more info</button>
    </section>
  );
}

export default Home;
