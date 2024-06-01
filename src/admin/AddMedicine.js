import React, { useState } from "react";
import Layout from "../core/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddMedicine = () => {
  const [name, setName] = useState("Panadol");
  const [genericName, setGenericName] = useState("Paracetamol");
  const [batchNo, setBatchNo] = useState(567732435);
  const [barCode, setBarCode] = useState(5675467);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(5);
  const [unitWeight, setUnitWeight] = useState(1);
  const [type, setType] = useState("");
  const [manDate, setManDate] = useState(new Date());
  const [expDate, setExpDate] = useState(new Date());
  const [cost, setCost] = useState(2200);
  const [retailCost, setRetailCost] = useState(1700);
  const [effects, setEffects] = useState("Dizzy");
  const [vendor, setVendor] = useState("");

  // Dummy types and vendors for design purposes
  const dummyTypes = ["Tablet", "Capsule", "Syrup"];
  const dummyVendors = [
    { _id: "1", name: "Pharma Inc." },
    { _id: "2", name: "Health Ltd." },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({
      name,
      genericName,
      batchNo,
      barCode,
      description,
      quantity,
      unitWeight,
      type,
      manDate,
      expDate,
      cost,
      retailCost,
      vendor,
      effects,
    });
  };

  const AddMedicineForm = () => (
    <div className="form-group col-md-12">
      <form onSubmit={submitHandler}>
        <div className="form-row">
          <div className="form-group col-md-3">
            <label htmlFor="inputAddress">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g Panadol"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="inputAddress">Generic Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g Paracetamol"
              value={genericName}
              onChange={(e) => setGenericName(e.target.value)}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="inputAddress">Batch No</label>
            <input
              type="text"
              className="form-control"
              placeholder="batch no"
              value={batchNo}
              onChange={(e) => setBatchNo(e.target.value)}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="inputAddress">Bar Code</label>
            <input
              type="text"
              className="form-control"
              placeholder="barcode no"
              value={barCode}
              onChange={(e) => setBarCode(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="inputAddress">Quantity</label>
            <input
              type="text"
              className="form-control"
              placeholder="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="inputAddress">Unit Weight</label>
            <input
              type="text"
              className="form-control"
              placeholder="weight"
              value={unitWeight}
              onChange={(e) => setUnitWeight(e.target.value)}
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="exampleFormControlSelect1">Type</label>
            <select
              onChange={(e) => setType(e.target.value)}
              className="form-control"
              id="exampleFormControlSelect1"
            >
              <option>Select Type</option>
              {dummyTypes.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress">Manufacture Date</label>
            <DatePicker
              selected={manDate}
              onChange={(date) => setManDate(date)}
              className="form-control"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputAddress">Expiry Date</label>
            <DatePicker
              selected={expDate}
              onChange={(date) => setExpDate(date)}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress">Cost</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g ksh 2500"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputAddress">Retail Cost</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g ksh 1700"
              value={retailCost}
              onChange={(e) => setRetailCost(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4">
            <label className="text-muted">Vendor</label>
            <select
              onChange={(e) => setVendor(e.target.value)}
              className="form-control"
            >
              <option>Select Vendor</option>
              {dummyVendors.map((c, i) => (
                <option key={i} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="write description"
              rows="3"
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="exampleFormControlTextarea1">Effects</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              value={effects}
              onChange={(e) => setEffects(e.target.value)}
              placeholder="write effects"
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
    <Layout title="Category Treatment Form">
      <>
        <h2 className="mb-4">Add Medicine</h2>
        {AddMedicineForm()}
      </>
    </Layout>
  );
};

export default AddMedicine;
