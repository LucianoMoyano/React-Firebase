import { Profile } from "../src/components/Profile/Profile";
import { Home } from "../src/components/Home/Home";
import { NavBar } from "../src/components/NavBar/NavBar";

import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "./components/Login/Login";

export default function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}
