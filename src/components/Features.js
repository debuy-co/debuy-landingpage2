import React from "react";
import sprite from "../assets/icons/sprite.svg";

function Features() {
  return (
    <section className="features">
      {/*TODO: vedere poi di mettere le icone giuste e il testo corretto*/}
      <div className="feature">
        <svg className="feature__icon">
          <use href={`${sprite}#icon-global`}></use>
        </svg>
        <h2 className="heading-2">Decentralized Supply Chain</h2>
        <p className="heading-5">
          We leverage blockchain technology to create a decentralized supply
          chain that eliminates intermediaries, reduces costs, and increases
          transparency.
        </p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <use href={`${sprite}#icon-global`}></use>
        </svg>
        <h2 className="heading-2">Smart Contract Automation</h2>
        <p className="heading-5">
          Our platform automates procurement processes using smart contracts
          that execute predefined rules and conditions. Reduce errors, speed up
          transactions, and improve efficiency.
        </p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <use href={`${sprite}#icon-global`}></use>
        </svg>
        <h2 className="heading-2">Digital Identity Verification</h2>
        <p className="heading-5">
          With decentralized identity (DID) protocols, we verify all parties in
          the procurement process reducing fraud, increase security, and improve
          overall trust in the procurement process.
        </p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <use href={`${sprite}#icon-global`}></use>
        </svg>
        <h2 className="heading-2">Collaborative Procurement</h2>
        <p className="heading-5">
          Debuy.co enables collaboration between multiple parties in the
          procurement process to improve communication, streamline processes,
          and achieve better outcomes.
        </p>
      </div>
    </section>
  );
}

export default Features;
