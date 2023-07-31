function Login() {
  return (
    <section className="log-in">
      <div className="log-in__header">
        <span class="log-close">&times;</span>
      </div>

      <form action="#" className="log-in__form">
        <div className="log-in__form__group">
          <input
            type="text"
            className="input-dark"
            placeholder="Username or Email"
            id="username"
            required
          />
        </div>
        <div className="log-in__form__group">
          <input
            type="password"
            className="input-dark"
            placeholder="Password"
            id="password"
            required
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
