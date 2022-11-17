import Splash from "./pages/SplashScreen/Splash";
import Picture from "./pages/Picture/Picture";
import Calculator from "./pages/Calculator/Calculator";
import Button from "./pages/Button/Button";
import Text from "./pages/Text/Text";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Navbar/Navbar";
import SignUp from "./pages/SignUp/SignUp";
import Forgotpass from "./pages/forgotPassword/Forgotpass";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<Forgotpass />} />
        <Route path="/" element={<Splash />} />
        <Route path="/picture" element={<Picture />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/button" element={<Button />} />
        <Route path="/text" element={<Text />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
