import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    username: "",
    aadhaarName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    permanentAddress: "",
    currentAddress: "",
  });

  const [sameAddress, setSameAddress] = useState(false);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    setMessage("");
  };

  const handleAddressCheck = (e) => {
    const checked = e.target.checked;
    setSameAddress(checked);

    if (checked) {
      setForm({
        ...form,
        currentAddress: form.permanentAddress,
      });
    } else {
      setForm({
        ...form,
        currentAddress: "",
      });
    }
  };

  const handlePermanentAddress = (e) => {
    const value = e.target.value;

    setForm({
      ...form,
      permanentAddress: value,
      currentAddress: sameAddress ? value : form.currentAddress,
    });
  };

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const maxSize = 5 * 1024 * 1024; // 5 MB

      if (selectedFile.size > maxSize) {
        setMessage("File size must be less than 5 MB");
        setFile(null);
        e.target.value = "";
      } else {
        setFile(selectedFile);
        setMessage("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.username !== form.aadhaarName) {
      setMessage("Username and Aadhaar Name must be the same");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(form.email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      setMessage("Phone number must contain exactly 10 digits");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("Password and Confirm Password do not match");
      return;
    }

    if (!form.permanentAddress || !form.currentAddress) {
      setMessage("Please enter both addresses");
      return;
    }

    if (!file) {
      setMessage("Please upload a file");
      return;
    }

    setMessage("Registration Successful!");
  };

  const handleClear = () => {
    setForm({
      username: "",
      aadhaarName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      permanentAddress: "",
      currentAddress: "",
    });

    setSameAddress(false);
    setFile(null);
    setMessage("");

    document.getElementById("fileInput").value = "";
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter username"
          />

          <label>Aadhaar Name</label>
          <input
            type="text"
            name="aadhaarName"
            value={form.aadhaarName}
            onChange={handleChange}
            placeholder="Enter Aadhaar name"
          />

          <label>Email</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
          />

          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            maxLength="10"
            placeholder="Enter 10 digit phone number"
          />

          <label>New Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
          />

          <label>Permanent Address</label>
          <textarea
            name="permanentAddress"
            value={form.permanentAddress}
            onChange={handlePermanentAddress}
            placeholder="Enter permanent address"
          ></textarea>

          <div className="checkbox">
            <input
              type="checkbox"
              checked={sameAddress}
              onChange={handleAddressCheck}
            />
            <span>Current address is same as permanent address</span>
          </div>

          <label>Current Address</label>
          <textarea
            name="currentAddress"
            value={form.currentAddress}
            onChange={handleChange}
            placeholder="Enter current address"
            disabled={sameAddress}
          ></textarea>

          <label>Upload File / Folder</label>
          <input
            id="fileInput"
            type="file"
            onChange={handleFile}
          />

          <p className="limit">Maximum file size: 5 MB</p>

          {file && (
            <p className="file-name">
              Selected: {file.name}
            </p>
          )}

          {message && (
            <p
              className={
                message === "Registration Successful!"
                  ? "success"
                  : "error"
              }
            >
              {message}
            </p>
          )}

          <div className="buttons">
            <button type="submit" className="submit">
              Submit
            </button>

            <button
              type="button"
              className="clear"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;