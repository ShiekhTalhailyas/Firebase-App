import React from "react";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import "./Forgotpass.css";
import Navbar from '../../components/Navbar/Navbar'
export default function Forgotpass() {
  const [email, setEmail] = useState("");
  const auth = getAuth();
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const triggerResetEmail = async () => {
    await sendPasswordResetEmail(auth, email);
    console.log(auth, email)
    console.log("Password reset email sent");
  };

  return (
    <div className="container-col">
      <Navbar />
     <h1 className="heading">Enter Email to Reset Password</h1>
      <input
        type={email}
        value={email}
        onChange={handleChange}
        className="input"
      />
      <button className="button" type="button" onClick={triggerResetEmail}>
        Reset password
      </button>
    </div>
  );
}
