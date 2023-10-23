import React from "react";

function Heading() {
  const title1 = "Why Debuy ?";
  const title2 = "Decentralized Contracts";
  const title3 =
    "DEBUY is on a mission to revolutionize the procurement industry through the use of web3 technologies. We strive to provide a decentralized and secure platform that empowers businesses and individuals to buy and sell goods and services without the need for intermediaries. Our goal is to foster a more efficient, transparent, and inclusive procurement ecosystem that benefits all participants.";

  return (
    <section className="home">
      <h3 className="heading-3 home__order1">{title1}</h3>
      <h1 className="heading-1 home__order2">{title2}</h1>
      <h5 className="heading-5 home__order3">{title3}</h5>
      <div class="vl"></div>
      <button className="btn-light btn-light-home">more info</button>
      <button className="btn-dark btn-dark-home">more info</button>
    </section>
  );
}

export default Heading;
