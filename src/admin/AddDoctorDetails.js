import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import Layout from "../core/Layout";

const AddDoctorsDetails = ({ history }) => {
  const [user, setUser] = useState("");
  const [lastName, setLastName] = useState("Curry");
  const [idNumber, setIdNumber] = useState(2222556);
  const [regDate, setRegDate] = useState(new Date());
  const [address, setAddress] = useState("Nairobi");
  const [cell, setCell] = useState(56755575);
  const [specialization, setSpecialization] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [residence, setResidence] = useState("Kilimani");
  const [email, setEmail] = useState("steph@gmail.com");
  const [gender, setGender] = useState("Male");
  const [duty, setDuty] = useState("");
  const [room, setRoom] = useState("");
  const [fee, setFee] = useState(2000);
  const [time_in, setTimeIn] = useState("10:00");
  const [time_out, setTimeOut] = useState("10:00");
  const [days, setDays] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  // Dummy data
  const users = [
    { _id: "1", name: "Dr. John Doe", role: 1 },
    { _id: "2", name: "Dr. Jane Smith", role: 1 },
  ];

  const specializations = [
    { _id: "1", name: "Cardiology" },
    { _id: "2", name: "Neurology" },
  ];

  const departments = [
    { _id: "1", name: "Cardiology Department" },
    { _id: "2", name: "Neurology Department" },
  ];

  const designations = [
    { _id: "1", name: "Senior Doctor" },
    { _id: "2", name: "Junior Doctor" },
  ];

  const genders = ["Male", "Female", "Other"];

  const dayes = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const duties = ["Morning", "Afternoon", "Evening"];

  const submitHandler = (e) => {
    e.preventDefault();
    // Implement the create doctor action
    console.log({
      user,
      lastName,
      idNumber,
      regDate,
      address,
      cell,
      specialization,
      department,
      designation,
      residence,
      email,
      gender,
      duty,
      room,
      fee,
      time_in,
      time_out,
      days,
      image,
    });
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

      const { data } = await axios.post(
        `http://localhost:8000/upload`,
        formData,
        config
      );
      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const doctorDetailsForm = () => (
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
                  .filter((filtered) => filtered.role === 1)
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
              placeholder="Last Name"
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
              Registration date
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
              placeholder="Write address"
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
              placeholder="Cell No"
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
              placeholder="Residence"
              value={residence}
              onChange={(e) => setResidence(e.target.value)}
            />
          </div>
          <div className="form-group col-md-3">
            <label className="font-weight-bold" htmlFor="inputAddress">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col-md-3">
            <label
              className="font-weight-bold"
              htmlFor="exampleFormControlSelect1"
            >
              Gender
            </label>
            <select
              onChange={(e) => setGender(e.target.value)}
              className="form-control"
              id="exampleFormControlSelect1"
            >
              <option>Select Gender</option>
              {genders &&
                genders.map((c, i) => (
                  <option key={i} value={c}>
                    {c}
                  </option>
                ))}
            </select>
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
          <div className="form-group col-md-4">
            <label className="font-weight-bold" htmlFor="inputAddress">
              Room
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <label className="font-weight-bold" htmlFor="inputAddress">
              Fee
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Fee"
              value={fee}
              onChange={(e) => setFee(e.target.value)}
            />
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
              {dayes &&
                dayes.map((c, i) => (
                  <option key={i} value={c}>
                    {c}
                  </option>
                ))}
            </select>
          </div>
          <div className="form-group col-md-3">
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
  );

  return (
    <Layout title="Category Treatment Form">
      <>
        <h2 className="mb-4">Add Doctor Details</h2>
        {doctorDetailsForm()}
      </>
    </Layout>
  );
};

export default AddDoctorsDetails;
