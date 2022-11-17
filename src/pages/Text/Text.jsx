import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import "./Text.css";
import { db } from "../../firebase.config";
import { setDoc, doc, getDoc } from "firebase/firestore";

export default function Text() {
  const [textUpload, setTextUpload] = useState("");
  const [textRead, setTextRead] = useState([]);

  const send = async (e) => {
    e.preventDefault();

    // Add data to the store
    const cityRef = doc(db, "text", "text");
    setDoc(cityRef, { Text: textUpload }, { merge: true });

    // Read data to the store
    const docRef = doc(db, "text", "text");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setTextRead(docSnap.data().Text);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="containerText">
        <h1 className="text">Enter the Text</h1>
        <input
          type="text"
          className="inputText"
          onChange={(e) => setTextUpload(e.target.value)}
          value={textUpload}
        />
        <button className="btnText" onClick={send}>
          Send to Firebase
        </button>
        <p className="text">{textRead}</p>
      </div>
    </div>
  );
}
