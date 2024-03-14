import React from "react";

function Heading() {
  const title1 = "Why Debuy ?";
  const title2 = "Decoding Procurement";
  const title3 =
    "At Debuy, our vision is to transform the landscape of procurement through autonomous purchasing solutions. We strive to empower businesses of all sizes with cutting-edge technology, fostering a future where procurement processes are streamlined, efficient, and intelligent. By embracing innovation and automation, we envision a world where businesses can focus on their core operations, confident in the knowledge that their purchasing processes are optimized for success.";

  return (
    <section className="home">
      <h3 className="heading-3 home__order1">{title1}</h3>
      <h1 className="heading-1 home__order2">{title2}</h1>
      <h5 className="heading-5 home__order3">{title3}</h5>
      <div class="vl"></div>
      <button className="btn-light btn-light-home">more info</button>
      {/* I think at the moment we don't need this additional buttom 
      <button className="btn-dark btn-dark-home">more info</button>*/}
    </section>
  );
}

export default Heading;
