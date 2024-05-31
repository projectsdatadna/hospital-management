import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./user/AdminDashboard";
import Profile from "./user/Profile";
import ListUsers from "./admin/ListUsers";
import ListExpenses from "./admin/ListExpenses";
import AddExpense from "./admin/AddExpense";
import UpdateExpenses from "./admin/UpdateExpenses";
import ListPatients from "./admin/ListPatients";
import ListDoctors from "./admin/ListDoctors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/list/users" element={<ListUsers />} />
        <Route path="/list-expenses" element={<ListExpenses />} />
        <Route path="/add-expenses" element={<AddExpense />} />
        <Route path="/update-expenses/:id" element={<UpdateExpenses />} />
        <Route path="/list-patients" element={<ListPatients />} />
        <Route path="/list-doctors" element={<ListDoctors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
