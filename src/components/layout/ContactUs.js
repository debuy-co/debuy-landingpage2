import React from "react";

function ContactUs() {
  return (
    <section className="contact-us">
      {/*questo sotto e' solo la parte sinistra con il form */}
      <div className="contact-us-box">
        <div className="contact-us-box__form">
          <form action="#" className="form">
            <h2 className="heading-2">Contact Us</h2>

            <div className="form__group">
              <input
                type="text"
                className="form__input"
                placeholder="Full name"
                id="name"
                required
              />
              {/*
              <label htmlFor="name" className="form__label">
                full name
              </label>
  */}
            </div>
            <div className="form__group">
              <input
                type="email"
                className="form__input"
                placeholder="Email address"
                id="email"
                required
              />

              {/*
              <label htmlFor="email" className="form__label">
                Email address
              </label>
*/}
            </div>

            {/*it is important that it is a button and not just an anchor element so that the form can recognize it and use it when submitting it*/}
            <button className="btn-dark">Next Step</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
