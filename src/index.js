import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import LoginPage from "views/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/stock/*" element={<AdminLayout />} />
          <Route path = "/login" element={<LoginPage/>} />
          {/* <Route
            path="*"
            element={<Navigate to="/stock/dashboard" replace />}
          /> */}
          {/* <Route exact path="/" component={Login} />
          <Route exact path="/home" render={(props) => <Admin {...props} />} />
          <Route exact path="/admin" render={(props) => <Admin {...props} />} />
          <Route exact path="/upload" render={(props) => <Admin {...props} />} /> */}
        </Routes>
      </BrowserRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>
);
