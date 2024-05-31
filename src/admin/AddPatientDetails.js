import React from "react";
import Layout from "../core/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddPatientDetails = () => {
  const patientDetailsForm = () => (
    <div className="form-group col-md-12">
      <form>
        <div className="form-row">
          <div className="form-group col-md-3">
            <label className="text-muted font-weight-bold">User</label>
            <select className="form-control">
              <option>Select Patient</option>
              <option value="1">John Doe</option>
              <option value="2">Jane Smith</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label className="font-weight-bold" htmlFor="inputLastName">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group col-md-3">
            <label className="font-weight-bold" htmlFor="inputIdNumber">
              Id Number
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Id Number"
            />
          </div>
          <div className="form-group col-md-3">
            <label className="font-weight-bold" htmlFor="inputRegDate">
              Registration Date
            </label>
            <DatePicker selected={new Date()} className="form-control" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-3">
            <label className="font-weight-bold" htmlFor="inputAddress">
              Address
            </label>
            <textarea
              className="form-control"
              placeholder="Write address"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group col-md-3">
            <label className="font-weight-bold" htmlFor="inputCell">
              Cell No
            </label>
            <input type="text" className="form-control" placeholder="Cell No" />
          </div>
          <div className="form-group col-md-3">
            <label className="font-weight-bold" htmlFor="inputBirthDate">
              Date of Birth
            </label>
            <DatePicker selected={new Date()} className="form-control" />
          </div>
          <div className="form-group col-md-3">
            <label className="font-weight-bold" htmlFor="inputResidence">
              Residence
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Residence"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-3">
            <label className="font-weight-bold" htmlFor="inputEmail">
              Email
            </label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group col-md-3">
            <label className="font-weight-bold" htmlFor="inputGuardian">
              Guardian
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Guardian"
            />
          </div>
          <div className="form-group col-md-3">
            <label className="font-weight-bold" htmlFor="inputRelation">
              Relation
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Relation"
            />
          </div>
          <div className="form-group col-md-3">
            <label className="font-weight-bold" htmlFor="inputGender">
              Gender
            </label>
            <select className="form-control" id="inputGender">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4">
            <label className="font-weight-bold" htmlFor="inputStatus">
              Patient Status
            </label>
            <select className="form-control" id="inputStatus">
              <option>Please Select</option>
              <option>Stable</option>
              <option>Critical</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label className="font-weight-bold" htmlFor="inputPatientType">
              Inpatient/Outpatient
            </label>
            <select className="form-control" id="inputPatientType">
              <option>Please Select</option>
              <option>Inpatient</option>
              <option>Outpatient</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label className="font-weight-bold" htmlFor="inputImage">
              Upload Photo
            </label>
            <input type="file" className="form-control-file" id="inputImage" />
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
        <h2 className="mb-4">Add Patient Details</h2>
        {patientDetailsForm()}
      </>
    </Layout>
  );
};

export default AddPatientDetails;
