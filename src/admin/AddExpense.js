import React, { useState } from "react";
import Layout from "../core/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddExpense = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [fromDate, setFromDate] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const [paid, setPaid] = useState("Un-paid");

  // Mock data for departments and pay status
  const departments = [
    { _id: "1", name: "Administration" },
    { _id: "2", name: "Sales" },
    { _id: "3", name: "IT" },
  ];

  const pays = ["Paid", "Un-paid", "Pending"];

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(
    //   createExpenses({
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

  const addExpenseForm = () => (
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
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              className="form-control"
            />
          </div>

          <div className="form-group col-md-6">
            <label className="font-weight-bold" htmlFor="inputAddress">
              To date
            </label>
            <DatePicker
              selected={to}
              onChange={(date) => setTo(date)}
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
              className="form-control"
              id="exampleFormControlSelect2"
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option>Select Department</option>
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
                <option>Select Pay</option>
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
        <h2 className="mb-4">Add Expense</h2>
        {addExpenseForm()}
      </>
    </Layout>
  );
};

export default AddExpense;
