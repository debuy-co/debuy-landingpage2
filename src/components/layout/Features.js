import React from "react";
import sprite from "../../assets/icons/sprite.svg";

function Features() {
  return (
    <section className="features">
      {/*TODO: vedere poi di mettere le icone giuste e il testo corretto*/}
      <div className="feature">
        <svg className="feature__icon">
          <use href={`${sprite}#icon-global`}></use>
        </svg>
        <h4 className="heading-2 ">Prova titolo</h4>
        <p className="heading-5">Prova testo</p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <use href={`${sprite}#icon-global`}></use>
        </svg>
        <h4 className="heading-2 ">Prova titolo</h4>
        <p className="heading-5">Prova testo</p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <use href={`${sprite}#icon-global`}></use>
        </svg>
        <h4 className="heading-2 ">Prova titolo</h4>
        <p className="heading-5">Prova testo</p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <use href={`${sprite}#icon-global`}></use>
        </svg>
        <h4 className="heading-2 ">Prova titolo</h4>
        <p className="heading-5">Prova testo</p>
      </div>
    </section>
  );
}

export default Features;
