import React, { Fragment } from "react";
import Layout from "../core/Layout";
import { Link } from "react-router-dom";
import moment from "moment";

// Mock data
const expenses = [
  {
    _id: "1",
    name: "Office Supplies",
    department: { name: "Administration" },
    amount: 150,
    description: "Pens, paper, and other office supplies",
    fromDate: "2024-01-01",
    to: "2024-01-31",
    paid: "Paid",
  },
  {
    _id: "2",
    name: "Travel Expenses",
    department: { name: "Sales" },
    amount: 300,
    description: "Client meetings and travel",
    fromDate: "2024-02-01",
    to: "2024-02-28",
    paid: "Pending",
  },
  {
    _id: "3",
    name: "Software Licenses",
    department: { name: "IT" },
    amount: 500,
    description: "Annual subscription for various software tools",
    fromDate: "2024-03-01",
    to: "2024-03-31",
    paid: "Paid",
  },
  {
    _id: "4",
    name: "Training and Development",
    department: { name: "Human Resources" },
    amount: 200,
    description: "Employee training sessions and workshops",
    fromDate: "2024-04-01",
    to: "2024-04-30",
    paid: "Pending",
  },
  {
    _id: "5",
    name: "Marketing Campaign",
    department: { name: "Marketing" },
    amount: 800,
    description: "Social media and online advertising",
    fromDate: "2024-05-01",
    to: "2024-05-31",
    paid: "Paid",
  },
  {
    _id: "6",
    name: "Utilities",
    department: { name: "Facilities" },
    amount: 250,
    description: "Electricity, water, and other utility bills",
    fromDate: "2024-06-01",
    to: "2024-06-30",
    paid: "Pending",
  },
  {
    _id: "7",
    name: "Consulting Fees",
    department: { name: "Finance" },
    amount: 400,
    description: "Consulting services for financial audit",
    fromDate: "2024-07-01",
    to: "2024-07-31",
    paid: "Paid",
  },
];
const ListExpenses = () => {
  const deleteHandler = (id) => {
    console.log(id);
    alert(`Deleting expense with id: ${id}`);
  };

  return (
    <Layout
      title="Profile"
      description="list treatment categories"
      className="container-fluid"
    >
      <h4>
        <Link to="/add-expenses">
          <button>Add Expense</button>
        </Link>
      </h4>

      <h2 className="mb-4">List Expenses</h2>
      {expenses.length === 0 ? (
        <div className="row">
          <div className="col-sm-8">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">name</th>
                  <th scope="col">Department</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Description</th>
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                  <th scope="col">Status</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">No Data</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-sm-8">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">name</th>
                  <th scope="col">Department</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Description</th>
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                  <th scope="col">Status</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {expenses &&
                  expenses.map((expense, i) => (
                    <tr key={i}>
                      <Fragment>
                        <th scope="row">{expense._id}</th>
                        <td>{expense.name}</td>
                        <td>{expense.department.name}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.description}</td>
                        <td>{moment(expense.fromDate).format("YYYY-MM-DD")}</td>
                        <td>{moment(expense.to).format("YYYY-MM-DD")}</td>
                        <td>
                          {expense.paid === "Paid" ? (
                            <button
                              type="button"
                              className="btn btn-success btn-sm"
                            >
                              {expense.paid}
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                            >
                              {expense.paid}
                            </button>
                          )}
                        </td>
                        <td>
                          <Link to={`/update-expenses/${expense._id}`}>
                            <i className="bi bi-pencil-square" />
                          </Link>
                        </td>
                        <td>
                          <i
                            className="bi bi-trash"
                            onClick={() => deleteHandler(expense._id)}
                          />
                        </td>
                      </Fragment>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Layout>
  );
};
export { expenses };
export default ListExpenses;
