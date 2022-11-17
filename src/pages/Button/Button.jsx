import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Button.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Button() {
  const notification = () => {
    toast("Notification Send");
  };
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="containerBtn">
        <button className="notificationBtn" onClick={notification}>
          Send Notification
        </button>
      </div>
    </div>
  );
}
