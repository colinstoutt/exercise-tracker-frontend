import "./Main.scss";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// import CONFIG from "../config/index";
import SignupPage from "../../pages/SignupPage";
import LoginPage from "../../pages/LoginPage";
import ProtectedRoute from "../../components/Protected-Route";
import { getToken } from "../../services/tokenService";

import Index from "../../pages/Index/Index";

const Main = (props) => {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={props.user}>
              <Index />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<SignupPage {...props} />} />
        <Route path="/login" element={<LoginPage {...props} />} />
      </Routes>
    </main>
  );
};

export default Main;
