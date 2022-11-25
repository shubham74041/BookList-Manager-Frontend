import "./styles.css";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error email");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        localStorage.setItem(
          "token",
          JSON.stringify({
            accessToken: res?.data?.accessToken,
          })
        );
        navigate("/landingPage");
        return;
      })
      .catch((err) => {
        setShowError(true);
        setErrorMessage(err.response.data.message);
        setTimeout(() => {
          setShowError(false);
        }, 3000);
        return;
      });
  };

  return (
    <div className="main-container">
      <form className="form-container" onSubmit={handleSubmit}>
        {showError && <div className="warning">{errorMessage}</div>}
        <div className="form-content">
          <h3 className="form-title">login</h3>
          <div className="lable-input-box">
            <label className="lable-text ">Email address</label>
            <input
              className="input-box"
              type="email"
              placeholder="Enter your email"
              required
              ref={emailRef}
            />
          </div>
          <div className="lable-input-box">
            <label className="lable-text ">Password</label>
            <input
              className="input-box"
              type="password"
              placeholder="Enter your password"
              required
              ref={passwordRef}
            />
            <div className="span-link">
              <br></br>
              <a href="/email">forgot password?</a>
            </div>
          </div>
          <div className="button form-title ">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
          <div className="span-link">
            <span>create an account</span>
            <br></br>
            <a href="/signUp">signUp</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
