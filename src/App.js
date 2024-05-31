import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./user/AdminDashboard";
import Profile from "./user/Profile";
import ListUsers from "./admin/ListUsers";
import ListExpenses from "./admin/ListExpenses";
import AddExpense from "./admin/AddExpense";
import UpdateExpenses from "./admin/UpdateExpenses";

import ListPatients from "./admin/ListPatients";
import AddPatientDetails from "./admin/AddPatientDetails";
import UpdatePatientProfile from "./admin/UpdatePatientProfile";

import ListDoctors from "./admin/ListDoctors";
import ListMedicine from "./admin/ListMedicine";
import AddMedicine from "./admin/AddMedicine";
import UpdateMedicine from "./admin/UpdateMedicine";

import ListVaccineCat from "./admin/ListVaccineCat";
import AddVaccineCat from "./admin/AddVaccineCat";
import UpdateVaccineCat from "./admin/UpdateVaccineCat";
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
        <Route path="/add-patient-details" element={<AddPatientDetails />} />
        <Route path="/update-patient" element={<UpdatePatientProfile />} />

        <Route path="/list-doctors" element={<ListDoctors />} />

        <Route path="/list/medicine" element={<ListMedicine />} />
        <Route path="/add-medicine" element={<AddMedicine />} />
        <Route path="/update-medicine/:id" element={<UpdateMedicine />} />

        <Route path="/list-vaccine-cat" element={<ListVaccineCat />} />
        <Route path="/add-vac-cat" element={<AddVaccineCat />} />
        <Route path="/update-vaccine-cat/:id" element={<UpdateVaccineCat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
