import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Picture.css";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../firebase.config";
import { v4 } from "uuid";
import { toast } from "react-toastify";

export default function Picture() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "images/");

  const upload = async () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    const snapshot = await uploadBytes(imageRef, imageUpload);
    toast("Image Uploaded");
    const url = await getDownloadURL(snapshot.ref);
    setImageUrls((prev) => [url]);
  };

  const handleChange = (e) => {
    const img = e.target.files[0];
    setImageUpload(img);
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls(() => [url]);
        });
      });
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="containerPicture">
        <input
          type="file"
          className="imageInput"
          onChange={handleChange}
          accept="image/jpeg, image/png, image/jpg"
        />
        <button type="submit" className="btnImage" onClick={upload}>
          Upload
        </button>
      </div>
      <div className="container-col">
        <h1 className="headingImage">Uploaded Image</h1>

        {imageUrls.map((url) => {
          return <img className="image" src={url} />;
        })}
      </div>
    </div>
  );
}
