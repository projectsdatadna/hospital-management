import React from "react";
import Layout from "../core/Layout";
import { Link } from "react-router-dom";
import { Pie, Doughnut } from "react-chartjs-2";

const AdminDashboard = () => {
  const mockUsers = [
    { _id: 1, name: "Admin User", email: "admin@example.com", role: 0 },
    { _id: 2, name: "Doctor User", email: "doctor@example.com", role: 1 },
    { _id: 3, name: "Patient User", email: "patient@example.com", role: 2 },
    { _id: 4, name: "Staff User", email: "staff@example.com", role: 3 },
    { _id: 5, name: "Nurse User", email: "nurse@example.com", role: 4 },
  ];

  const mockExpenses = [
    { name: "Rent", amount: 1000 },
    { name: "Utilities", amount: 500 },
  ];

  const mockAppointments = [
    { vaccine: { name: "CoronaVirus" }, taken: "Yes" },
    { vaccine: { name: "CoronaVirus" }, taken: "No" },
  ];

  const chartData = {
    labels: ["Admin", "Doctors", "Patients", "Staff", "Nurses"],
    datasets: [
      {
        backgroundColor: [
          "#007bff",
          "#dc3545",
          "#ffc107",
          "#28a745",
          "#11ede9",
        ],
        data: [1, 1, 1, 1, 1],
      },
    ],
  };

  const expenseChartData = {
    labels: ["Rent: 1000", "Utilities: 500"],
    datasets: [
      {
        backgroundColor: ["#007bff", "#dc3545"],
        data: [1000, 500],
      },
    ],
  };

  const appointmentChartData = {
    labels: ["Vaccinated: 1", "Not Vaccinated: 1"],
    datasets: [
      {
        backgroundColor: ["#28a745", "#dc3545"],
        data: [1, 1],
      },
    ],
  };

  const vaccineChartData = {
    labels: ["Covid: 1", "Malaria: 0"],
    datasets: [
      {
        backgroundColor: ["#007bff", "#dc3545"],
        data: [1, 0],
      },
    ],
  };

  return (
    <Layout title="Dashboard">
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary text-white mb-4">
            <div className="card-body">Admin Users</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link
                className="small text-white stretched-link"
                to={`/list/users`}
              >
                1
              </Link>
              <div className="small text-white">
                <i className="fas fa-angle-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-warning text-white mb-4">
            <div className="card-body">Doctors</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link
                className="small text-white stretched-link"
                to={`/list/users`}
              >
                1
              </Link>
              <div className="small text-white">
                <i className="fas fa-angle-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-success text-white mb-4">
            <div className="card-body">Payments</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="#">
                Ksh 0
              </a>
              <div className="small text-white">
                <i className="fas fa-angle-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-danger text-white mb-4">
            <div className="card-body">Expenses</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="#">
                Ksh 1500
              </a>
              <div className="small text-white">
                <i className="fas fa-angle-right" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-chart-pie mr-1" />
              User Types
            </div>
            <div className="card-body">
              <Pie data={chartData} />
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-chart-pie mr-1" />
              Expenses Types
            </div>
            <div className="card-body">
              <Doughnut data={expenseChartData} />
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-chart-pie mr-1" />
              CoronaVirus
            </div>
            <div className="card-body">
              <Doughnut data={appointmentChartData} />
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-chart-pie mr-1" />
              Types of Vaccines Taken
            </div>
            <div className="card-body">
              <Pie data={vaccineChartData} />
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
        </div>

        <div className="col-sm-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.map((user, i) => (
                <tr key={i}>
                  <th scope="row">{user._id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === 0 ? (
                      <button type="button" className="btn btn-primary btn-sm">
                        Admin
                      </button>
                    ) : user.role === 1 ? (
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                      >
                        Doctor
                      </button>
                    ) : user.role === 2 ? (
                      <button type="button" className="btn btn-info btn-sm">
                        Patient
                      </button>
                    ) : user.role === 4 ? (
                      <button type="button" className="btn btn-dark btn-sm">
                        Nurse
                      </button>
                    ) : (
                      <button type="button" className="btn btn-warning btn-sm">
                        Staff
                      </button>
                    )}
                  </td>
                  <td>
                    <Link to={`/update/users/${user._id}`}>
                      <i className="bi bi-pencil-square"></i>
                    </Link>
                  </td>
                  <td>
                    <i className="bi bi-trash" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
