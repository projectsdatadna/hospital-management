import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Layout from "../core/Layout";

const PatientDetailsForm = ({ users, genders, status, types }) => {
  const [user, setUser] = useState("");
  const [lastName, setLastName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [regDate, setRegDate] = useState(new Date());
  const [address, setAddress] = useState("");
  const [cell, setCell] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [residence, setResidence] = useState("");
  const [email, setEmail] = useState("");
  const [guardian, setGuardian] = useState("");
  const [relation, setRelation] = useState("");
  const [gender, setGender] = useState("");
  const [statusPatient, setStatusPatient] = useState("");
  const [patientType, setPatientType] = useState("");
  const [uploading, setUploading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const patientDetails = {
      user,
      lastName,
      idNumber,
      regDate,
      address,
      cell,
      birthDate,
      residence,
      email,
      guardian,
      relation,
      gender,
      statusPatient,
      patientType,
    };

    console.log(patientDetails);
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
      <h2 className="mb-4">Add Patient Details</h2>

      <div className="form-group col-md-12">
        <form onSubmit={submitHandler}>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label className="text-muted font-weight-bold">User</label>
              <select
                onChange={(e) => setUser(e.target.value)}
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
              <label className="font-weight-bold" htmlFor="inputAddress">
                Date of Birth
              </label>
              <DatePicker
                selected={birthDate}
                onChange={(date) => setBirthDate(date)}
                className="form-control"
              />
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
            <div className="form-group col-md-3">
              <label className="font-weight-bold" htmlFor="inputAddress">
                Relation
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="relation"
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
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
            <div className="form-group col-md-4">
              <label
                className="font-weight-bold"
                htmlFor="exampleFormControlSelect1"
              >
                Patient Status
              </label>
              <select
                onChange={(e) => setStatusPatient(e.target.value)}
                className="form-control"
                id="exampleFormControlSelect1"
              >
                <option>Please Select</option>
                <option value="Male">Normal</option>
                <option value="Female">Abnormal</option>
                {status &&
                  status.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
              </select>
            </div>

            <div className="form-group col-md-4">
              <label
                className="font-weight-bold"
                htmlFor="exampleFormControlSelect1"
              >
                Inpatient/Outpatient
              </label>
              <select
                onChange={(e) => setPatientType(e.target.value)}
                className="form-control"
                id="exampleFormControlSelect1"
              >
                <option>Please Select</option>
                <option value="Male">Inpatient</option>
                <option value="Female">Outpatient</option>
                {types &&
                  types.map((c, i) => (
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

export default PatientDetailsForm;
