import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassw() {
  const navigate = useNavigate();

  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:4000/forgotPassword", {
        password: passwordRef.current.value,
        confirmPassword: confirmPasswordRef.current.value,
      })
      .then((res) => {
        navigate("/login");
        return;
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="main-container">
      <form className="form-container " onSubmit={handleSubmit}>
        {/* {showError && <div className="warning">{errorMessage}</div>} */}
        <div className="form-content">
          <h3 className="form-title">Password Change</h3>
          <div className="lable-input-box">
            <label className="lable-text ">New Password</label>
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
        </div>
      </form>
    </div>
  );
}

export default ForgotPassw;
