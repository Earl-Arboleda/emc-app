import React, { useState } from "react";

const FormComponent = ({ addObject }) => {
  const [itemName, setItemName] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [itemNo, setItemNo] = useState("");
  const [status, setStatus] = useState("functional");
  const [image, setImage] = useState("");

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleSerialNoChange = (event) => {
    setSerialNo(event.target.value);
  };

  const handleItemNoChange = (event) => {
    setItemNo(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImage("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newObject = {
      itemName: itemName,
      serialNo: serialNo,
      itemNo: itemNo,
      status: status,
      image: image
    };

    addObject(newObject);

    setItemName("");
    setSerialNo("");
    setItemNo("");
    setStatus("functional");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Item Name:
        <input type="text" value={itemName} onChange={handleItemNameChange} />
      </label>
      <label>
        Serial No:
        <input type="text" value={serialNo} onChange={handleSerialNoChange} />
      </label>
      <label>
        Item No:
        <input type="text" value={itemNo} onChange={handleItemNoChange} />
      </label>
      <label>
        Status:
        <select value={status} onChange={handleStatusChange}>
          <option value="functional">Functional</option>
          <option value="broken">Broken</option>
          <option value="missing">Missing</option>
        </select>
      </label>
      <label>
        Image:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      <button type="submit">Add Object</button>
    </form>
  );
};

const Popup = ({ addObject, closePopup }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Add Objects</h2>
        <FormComponent addObject={addObject} />
        <button className="close-button" onClick={closePopup}>
          Close
        </button>
      </div>
    </div>
  );
};

const ParentComponent = () => {
  const [objects, setObjects] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const addObject = (newObject) => {
    setObjects([...objects, newObject]);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <h1>Add Objects</h1>
      <button onClick={openPopup}>Open Popup</button>
      <ul>
        {objects.map((object, index) => (
          <li key={index}>
            Item Name: {object.itemName}, Serial No: {object.serialNo}, Item No:{" "}
            {object.itemNo}, Status: {object.status}
            <br />
            {object.image && <img src={object.image} alt="Object" />}
          </li>
        ))}
      </ul>
      {showPopup && <Popup addObject={addObject} closePopup={closePopup} />}
    </div>
  );
};

export default ParentComponent;
