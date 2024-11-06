import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cards from "./pages/Cards";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Login from "./pages/Login";
import Reports from "./pages/Reports";
import Budget from "./pages/Budget";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/profile" element={<MyProfile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/budget" element={<Budget />} />
    </Routes>
  );
}

export default App;