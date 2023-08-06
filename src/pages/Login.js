import { useState } from "react";

function Login(props) {
  const [enteredUsername, setUserName] = useState("");
  const [enteredPassword, setPassword] = useState("");

  function usernameChangeHandler(event) {
    setUserName(event.target.value);
  }

  function passwordChangeHandler(event) {
    setPassword(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault(); //because by default the submitHandler will send a http request to the page and make it upload the page, which we don't want.
    const postData = {
      username: enteredUsername,
      password: enteredPassword,
    };
    console.log(postData);
  }

  return (
    <section className="log-in">
      <div className="log-in__header">
        <button type="button" class="btn-close" onClick={props.onButtonclick}>
          <span class="icon-cross"></span>
        </button>
      </div>

      <form action="#" className="log-in__form" onSubmit={submitHandler}>
        <div className="log-in__form__group">
          <input
            type="text"
            className="input-dark"
            placeholder="Username or Email"
            id="username"
            required
            onChange={usernameChangeHandler}
          />
        </div>
        <div className="log-in__form__group">
          <input
            type="password"
            className="input-dark"
            placeholder="Password"
            id="password"
            required
            onChange={passwordChangeHandler}
          />
        </div>

        {/*it is important that it is a button and not just an anchor element so that the form can recognize it and use it when submitting it*/}
        <button className="btn-dark">Login</button>

        <h5>
          Forgot <a href="#">password?</a>
        </h5>
      </form>

      <div class="ol"></div>
      <div className="log-in__redirecting">
        Not registered yet?{" "}
        <a href="#1" className="log-in__redirecting-navigation-link">
          Contact Us
        </a>
      </div>
    </section>
  );
}

export default Login;
