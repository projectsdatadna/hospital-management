import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useParams } from "react-router-dom";
import { expenses } from "./ListExpenses";

const UpdateExpenses = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [to, setTo] = useState("");
  const [paid, setPaid] = useState("");

  // Mock data for departments and pay status
  const departments = [
    { _id: "1", name: "Administration" },
    { _id: "2", name: "Sales" },
    { _id: "3", name: "IT" },
  ];

  const pays = ["Paid", "Un-paid", "Pending"];

  useEffect(() => {
    const getExpenseById = (id) => {
      return expenses.find((expense) => expense._id === id);
    };
    const expense = getExpenseById(id);
    if (expense) {
      setName(expense.name);
      setDepartment(expense.department.name);
      setAmount(expense.amount);
      setDescription(expense.description);
      setFromDate(moment(expense.fromDate).format("YYYY-MM-DD"));
      setTo(moment(expense.to).format("YYYY-MM-DD"));
      setPaid(expense.paid);
    }
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(
    //   updateExpense({
    //     _id: id,
    //     name,
    //     department,
    //     amount,
    //     description,
    //     fromDate,
    //     to,
    //     paid,
    //   })
    // );
  };

  const UpdateExpenseForm = () => (
    <div className="form-group col-md-12">
      <form onSubmit={submitHandler}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label className="font-weight-bold" htmlFor="inputAddress2">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label className="font-weight-bold" htmlFor="inputAddress">
              Amount
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label className="font-weight-bold" htmlFor="inputAddress">
              From date
            </label>
            <DatePicker
              value={fromDate}
              onChange={(date) =>
                setFromDate(moment(date).format("YYYY-MM-DD"))
              }
              className="form-control"
            />
          </div>

          <div className="form-group col-md-6">
            <label className="font-weight-bold" htmlFor="inputAddress">
              To date
            </label>

            <DatePicker
              value={to}
              onChange={(date) => setTo(moment(date).format("YYYY-MM-DD"))}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label
              className="font-weight-bold"
              htmlFor="exampleFormControlSelect2"
            >
              Department
            </label>
            <select
              //   multiple
              value={department}
              className="form-control"
              id="exampleFormControlSelect2"
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="">Select Department</option>
              {departments &&
                departments.map((c, i) => (
                  <option key={i} value={c._id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-group col-md-6">
            <label
              className="font-weight-bold"
              htmlFor="exampleFormControlTextarea1"
            >
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="write a description"
              rows="3"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-3">
            <div className="form-group">
              <label
                className="font-weight-bold"
                htmlFor="exampleFormControlSelect1"
              >
                Paid
              </label>
              <select
                onChange={(e) => setPaid(e.target.value)}
                className="form-control"
                id="exampleFormControlSelect1"
              >
                <option>Select Pays</option>
                {pays &&
                  pays.map((p, i) => (
                    <option key={i} value={p}>
                      {p}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );

  return (
    <Layout title="Category Treatment Form">
      <>
        <h2 className="mb-4">Update Expense</h2>
        {UpdateExpenseForm()}
      </>
    </Layout>
  );
};

export default UpdateExpenses;
