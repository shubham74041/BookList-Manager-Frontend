import React from "react";
import Login from "./component/login";
import SignUp from "./component/signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import ForgotPassw from "./component/ForgotPassw";
import Email from "./component/email";
import LandingPage from "./component/Landing";
import PrivateRoute, { useAuth } from "./routes/PrivateRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/signup"
          element={useAuth() ? <LandingPage /> : <SignUp />}
        />
        <Route
          path="/login"
          element={useAuth() ? <LandingPage /> : <Login />}
        />
        <Route
          path="/landingPage"
          element={
            <PrivateRoute key={1}>
              <LandingPage />
            </PrivateRoute>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/forgotPassword" element={<ForgotPassw />} />
        <Route path="/email" element={<Email />} />
        {/* <Route path="/test" element={<Axios />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
