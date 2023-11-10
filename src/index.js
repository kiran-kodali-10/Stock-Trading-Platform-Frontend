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
import { Provider } from "react-redux";
import store from "redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <Provider store={store}>
        <BrowserRouter>
        
          <Routes>
            {/* <Route path="/login" element={<LoginPage />} /> */}
            {/* <Route
            path="*"
            element={<Navigate to="/stock/dashboard" replace />}
          /> */}
            <Route path="/stock/*" element={<AdminLayout />} />
            <Route exact path="/" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>
);
