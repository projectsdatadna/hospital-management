import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./user/AdminDashboard";
import Profile from "./user/Profile";
import ListUsers from "./admin/ListUsers";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/list/users" element={<ListUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
