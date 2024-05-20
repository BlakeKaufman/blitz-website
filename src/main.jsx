import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import App from "./pages/home/index.jsx";
import NavFooterWrapper from "./pages/assets/components/pageWrapper/index.jsx";
import {
  LicensePage,
  PrivacyPolicyPage,
  TermsAndConditionsPage,
} from "./pages/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavFooterWrapper />}>
        <Route path="/" index element={<App />} />
        {/* <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}

        <Route path="/terms&polocies/policy" element={<PrivacyPolicyPage />} />
        <Route
          path="/terms&polocies/terms"
          element={<TermsAndConditionsPage />}
        />
        <Route path="/terms&polocies/license" element={<LicensePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
