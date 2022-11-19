import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../../components/Navbar/Navbar";
import "./Calculator.css";
import axios from "axios";
import { URL } from "../../utills/apiUtills";

export default function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operation, setOperation] = useState("Add");
  const [result, setResult] = useState("");
  const handleCalculate = () => {
    if (number1 === "" || number2 === "" || operation === "") {
      toast("Please Fill All Fields");
    } else {
      axios
        .post(`${URL}/calculate/${operation.toLowerCase()}`, {
          Number1: parseInt(number1),
          Number2: parseInt(number2),
        })
        .then(function (response) {
          setResult(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  function option() {
    var x = document.getElementById("operations").value;
    if (x == null) return;
    setOperation(x);
  }

  return (
    <>
      <Navbar />
      <div className="container-col">
        <ToastContainer />
        <h1 className="heading">Calculator</h1>
        <div className="container-row">
          <input
            type="number"
            className="inputNumber"
            value={number1}
            placeholder="Number 1"
            onChange={(e) => {
              setNumber1(e.target.value);
            }}
          />
          <input
            type="number"
            className="inputNumber"
            value={number2}
            placeholder="Number 2"
            onChange={(e) => {
              setNumber2(e.target.value);
            }}
          />
          <select
            name="operations"
            id="operations"
            className="inputNumber"
            onChange={option}
          >
            <option value="Add">Add</option>
            <option value="Subtract">Subtract</option>
            <option value="Multiply">Multiply</option>
          </select>
          <button type="submit" className="button" onClick={handleCalculate}>
            Calculate
          </button>
        </div>
        <h2 className="heading2">Result: {result}</h2>
      </div>
    </>
  );
}
