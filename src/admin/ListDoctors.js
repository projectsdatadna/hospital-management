import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Layout from "../core/Layout";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const DoctorDetails = ({ users, genders, status, types }) => {
  const [user, setUser] = useState("");
  const [lastName, setLastName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [regDate, setRegDate] = useState(new Date());
  const [address, setAddress] = useState("");
  const [cell, setCell] = useState("");
  const [specializations, setSpecialization] = useState("");
  const [designations, setDesignation] = useState("");
  const [departments, setDepartment] = useState("");
  const [residence, setResidence] = useState("");
  const [email, setEmail] = useState("");
  const [guardian, setGuardian] = useState("");
  const [fee, setFee] = useState("");
  const [gender, setGender] = useState("");
  const [duty, setDuty] = useState("");
  const [duties, setDuties] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [time_in, setTimeIn] = useState("10:00");
  const [time_out, setTimeOut] = useState("10:00");
  const [days, setDays] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const doctorDetails = {
      user,
      lastName,
      idNumber,
      regDate,
      address,
      cell,
      designations,
      departments,
      specializations,
      residence,
      email,
      guardian,
      fee,
      gender,
      duty,
      duties,
      time_in,
      time_out,
      days,
    };

    console.log(doctorDetails);
    // You can replace the console.log with an API call to save the data
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);
      console.log(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  return (
    <Layout>
      <h2 className="mb-4">Add Doctor Details</h2>

      <div className="form-group col-md-12">
        <form onSubmit={submitHandler}>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label className="text-muted font-weight-bold">User</label>
              <select
                onChange={(e) => setUser(e.target.value)}
                className="form-control"
              >
                <option>Select Doctor</option>
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
            <div className="form-group col-md-3">
              <label className="font-weight-bold" htmlFor="inputAddress">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Last Number"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-3">
              <label className="font-weight-bold" htmlFor="inputAddress">
                Id Number
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Id Number"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
              />
            </div>
            <div className="form-group col-md-3">
              <label className="font-weight-bold" htmlFor="inputAddress">
                Registration Date
              </label>
              <DatePicker
                selected={regDate}
                onChange={(date) => setRegDate(date)}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-3">
              <label
                className="font-weight-bold"
                htmlFor="exampleFormControlTextarea1"
              >
                Address
              </label>
              <textarea
                className="form-control"
                placeholder="write address"
                rows="3"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="form-group col-md-3">
              <label className="font-weight-bold" htmlFor="inputAddress">
                Cell No
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="cell no"
                value={cell}
                onChange={(e) => setCell(e.target.value)}
              />
            </div>
            <div className="form-group col-md-3">
              <label className="text-muted font-weight-bold">
                Specialization
              </label>
              <select
                onChange={(e) => setSpecialization(e.target.value)}
                className="form-control"
              >
                <option>Select</option>
                {specializations &&
                  specializations.map((c, i) => (
                    <option key={i} value={c._id}>
                      {c.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="form-group col-md-3">
              <label className="text-muted font-weight-bold">Department</label>
              <select
                onChange={(e) => setDepartment(e.target.value)}
                className="form-control"
              >
                <option>Select</option>
                {departments &&
                  departments.map((c, i) => (
                    <option key={i} value={c._id}>
                      {c.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-3">
              <label className="text-muted font-weight-bold">Designation</label>
              <select
                onChange={(e) => setDesignation(e.target.value)}
                className="form-control"
              >
                <option>Select</option>
                {designations &&
                  designations.map((c, i) => (
                    <option key={i} value={c._id}>
                      {c.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="form-group col-md-3">
              <label className="font-weight-bold" htmlFor="inputAddress">
                Residence
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="residence"
                value={residence}
                onChange={(e) => setResidence(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-3">
              <label className="font-weight-bold" htmlFor="inputAddress">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label
                className="font-weight-bold"
                htmlFor="exampleFormControlSelect1"
              >
                Duty
              </label>
              <select
                onChange={(e) => setDuty(e.target.value)}
                className="form-control"
                id="exampleFormControlSelect1"
              >
                <option>Select Duty</option>
                {duties &&
                  duties.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
              </select>
            </div>

            <div className="form-group col-md-3">
              <label className="font-weight-bold" htmlFor="inputAddress">
                Guardian
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="guardian"
                value={guardian}
                onChange={(e) => setGuardian(e.target.value)}
              />
            </div>

            <div className="form-group col-md-4">
              <label className="font-weight-bold" htmlFor="inputAddress">
                Fee
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="relation"
                value={fee}
                onChange={(e) => setFee(e.target.value)}
              />
            </div>

            <div className="form-group col-md-3">
              <label className="font-weight-bold" htmlFor="genderSelect">
                Gender
              </label>
              <select
                onChange={(e) => setGender(e.target.value)}
                className="form-control"
                id="genderSelect"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-3">
              <label className="font-weight-bold" htmlFor="inputAddress">
                Time In
              </label>
              <TimePicker
                onChange={setTimeIn}
                value={time_in}
                className="class1 class2"
              />
            </div>

            <div className="form-group col-md-3">
              <label className="font-weight-bold" htmlFor="inputAddress">
                Time Out
              </label>
              <TimePicker
                onChange={setTimeOut}
                value={time_out}
                clockClassName="class1 class2"
              />
            </div>
            <div className="form-group col-md-3">
              <label
                className="font-weight-bold"
                htmlFor="exampleFormControlSelect2"
              >
                Day
              </label>
              <select
                multiple
                className="form-control"
                id="exampleFormControlSelect2"
                onChange={(e) => setDays(e.target.value)}
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

            <div className="form-group col-md-4">
              <label
                className="font-weight-bold"
                htmlFor="exampleFormControlFile1"
              >
                Upload Photo
              </label>
              <input
                type="file"
                onChange={uploadFileHandler}
                className="form-control-file"
                id="exampleFormControlFile1"
              />
              {uploading && (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default DoctorDetails;
