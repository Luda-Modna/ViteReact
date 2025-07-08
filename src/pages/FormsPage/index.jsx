import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router";
import SignUpForm from "../../components/forms/AuthenticationForm";
import LoginForm from "../../components/forms/AuthenticationForm/LoginForm";

function FormsPage() {
  return (
    <Router>
      <Routes>
        <Route index element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default FormsPage;
