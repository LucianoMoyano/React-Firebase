import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./nav.css";

export const NavBar = () => {
  const { user } = useAuth();

  return (
    <div>
      <Link to="/home">Home</Link>
      {user && <Link to="/profile">Mi perfil</Link>}
      <Link to="/login">Iniciar Sesión</Link>
    </div>
  );
};
