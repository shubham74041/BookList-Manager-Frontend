import "./styles.css";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRef?.current?.value !== confirmPasswordRef?.current?.value) {
      setErrorMessage("Password Didn't Match");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);

      return;
    }

    axios
      .post(process.env.REACT_APP_BACKEND_URL+"signUp", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        navigate("/login");
        return;
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="main-container">
      <form className="form-container" onSubmit={handleSubmit}
      >
        {showError && <div className="warning">{errorMessage}</div>}
        <div className="form-content">
          <h3 className="form-title">Sign Up</h3>
          <div className="lable-input-box">
            <label className="lable-text ">Email address</label>
            <input
              className="input-box"
              type="email"
              placeholder="Enter your email"
              required
              const
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
          </div>
          <div className="lable-input-box">
            <label className="lable-text ">Confirm Password</label>
            <input
              className="input-box"
              type="password"
              placeholder="Enter your confirm password"
              required
              ref={confirmPasswordRef}
            />
          </div>
          <div className="button form-title ">
            <button type="submit" className="btn" S>
              Submit
            </button>
          </div>
          <div className="span-link">
            <span>already have an account ?</span>
            <br></br>
            <a href="/login">login</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
