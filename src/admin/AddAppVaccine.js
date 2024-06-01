import React, { useState } from "react";
import Layout from "../core/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const AddAppVaccine = ({ history: history1 }) => {
  const [patient, setPatient] = useState("");
  const [nurse, setNurse] = useState("");
  const [vaccine, setVaccine] = useState("");
  const [date, setDate] = useState(new Date());
  const [time_in, setTimeIn] = useState("10:00");
  const [taken, setTaken] = useState("");
  const [day, setDay] = useState("");
  const [room, setRoom] = useState("105");
  const [remarks, setRemarks] = useState("");

  const userInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: 0,
  };

  const vaccines = [
    { name: "COVID-19 Vaccine", _id: "1" },
    { name: "Flu Vaccine", _id: "2" },
  ];

  const users = [
    { name: "Nurse Jane", _id: "1", role: "nurse" },
    { name: "Patient John", _id: "2", role: "patient" },
  ];

  const types = ["Type 1", "Type 2", "Type 3"];

  const takes = ["Yes", "No"];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const submitHandler = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log({
      patient,
      nurse,
      vaccine,
      date,
      time_in,
      taken,
      day,
      room,
      remarks,
    });
  };
  const AddAppointmentForm = () => (
    <div className="form-group col-md-12">
      <form onSubmit={submitHandler}>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label className="text-muted">User</label>
            <select
              onChange={(e) => setPatient(e.target.value)}
              className="form-control"
            >
              <option>Select Patient</option>
              {users &&
                users
                  .filter((filtered) => filtered.role === 2)
                  .map((c, i) => (
                    <option key={i} value={c._id}>
                      {c.name}
                    </option>
                  ))}
            </select>
          </div>
          <div className="form-group col-md-4">
            <label className="text-muted">User</label>
            <select
              onChange={(e) => setNurse(e.target.value)}
              className="form-control"
            >
              <option>Select Nurse</option>
              {users &&
                users
                  .filter((filtered) => filtered.role === 4)
                  .map((c, i) => (
                    <option key={i} value={c._id}>
                      {c.name}
                    </option>
                  ))}
            </select>
          </div>
          <div className="form-group col-md-4">
            <label className="text-muted">Vaccine</label>
            <select
              onChange={(e) => setVaccine(e.target.value)}
              className="form-control"
            >
              <option>Select Vaccine</option>
              {vaccines &&
                vaccines.map((c, i) => (
                  <option key={i} value={c._id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress">Time In</label>
            <TimePicker
              onChange={setTimeIn}
              value={time_in}
              className="class1 class2"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputAddress">Date</label>

            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlSelect1">Taken</label>
            <select
              onChange={(e) => setTaken(e.target.value)}
              className="form-control"
              id="exampleFormControlSelect1"
            >
              <option>Select Take</option>
              {takes &&
                takes.map((c, i) => (
                  <option key={i} value={c}>
                    {c}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlSelect1">Day</label>
            <select
              onChange={(e) => setDay(e.target.value)}
              className="form-control"
              id="exampleFormControlSelect1"
            >
              <option>Select Day</option>
              {days &&
                days.map((c, i) => (
                  <option key={i} value={c}>
                    {c}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress">Room</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g 105"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlTextarea1">Remarks</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="write description"
              rows="3"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );

  return (
    <Layout title="Category treatment Form">
      <>
        <h2 className="mb-4">Add Appointment</h2>
        {AddAppointmentForm()}
      </>
    </Layout>
  );
};

export default AddAppVaccine;
