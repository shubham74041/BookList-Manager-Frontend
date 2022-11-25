import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Email(props) {
  const emailRef = useRef();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error email");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(process.env.REACT_APP_BACKEND_URL + "email", {
        email: emailRef.current.value,
      })
      .then((res) => {
        if (res?.data === true) {
          navigate("/forgotPassword", {
            state: { email: emailRef?.current?.value },
          });
        }
        return;
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 1000);
      });
  };

  return (
    <div className="main-container">
      <form className="form-container" onSubmit={handleSubmit}>
        {showError && <div className="warning">{errorMessage}</div>}
        <div className="form-content">
          <h3 className="form-title">Forgot-Password</h3>
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
        </div>
        <div className="button form-title ">
          <button type="submit" className="btn">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Email;
