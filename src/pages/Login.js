function Login() {
  return (
    <section className="log-in">
      <div className="log-in__header">
        <h3 className="log-in__header__title">Sign In</h3>
        <span class="log-close">&times;</span>
      </div>

      <form className="log-in__form">
        <div className="Auth-form-content">
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>

      <div className="log-in__redirecting">
        Not registered yet? <span className="link-primary">Sign Up</span>
      </div>
    </section>
  );
}

export default Login;
