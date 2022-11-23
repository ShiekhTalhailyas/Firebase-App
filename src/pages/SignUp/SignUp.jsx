import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../../firebase.config";
import "./SignUp.css";
import Navbar from "../../components/Navbar/Navbar";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // const [doc, setDoc] = useState("");

  const { name, email, password } = formData;
  const navigate = useNavigate();
  const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      alert("password should be greater than 8");
      return;
    } else if (!regex.test(email)) {
      console.log(regex.test(email));
      alert("enter valid email address");
      return;
    } else {
      try {
        console.log("try");
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        console.log("submit");
        navigate("/calculator");
        // const user = userCredential.user;

        // updateProfile(auth.currentUser, {
        //   displayName: name,
        // });

        // const formDataCopy = { ...formData };
        // delete formDataCopy.password;

        // await setDoc(doc(db, "users", user.uid), formDataCopy);
      } catch (error) {
        toast.error("Something went wrong with registration");
      }
    }
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <header>
          <p className="pageHeader">Sign Up!</p>
        </header>

        <form onSubmit={onSubmit} className="form container-col">
          <input
            type="text"
            className="input"
            placeholder="Name"
            id="name"
            value={name}
            onChange={onChange}
          />
          <input
            type="email"
            className="input"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />

          <input
            type={showPassword ? "text" : "password"}
            className="input"
            placeholder="Password"
            id="password"
            value={password}
            onChange={onChange}
          />
          <div className="signUpBar">
            <button className="button" type="submit">
              Sign Up
            </button>
          </div>

          <Link to="/forgot-password" className="link">
            Forgot Password
          </Link>
        </form>
      </div>
    </>
  );
}
export default SignUp;
