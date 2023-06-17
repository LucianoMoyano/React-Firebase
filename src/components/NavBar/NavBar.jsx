import React from "react";
import { Link } from "react-router-dom";

import "./nav.css";

export const NavBar = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/profile">Mi perfil</Link>
      <Link to="/login">Iniciar Sesión</Link>
    </div>
  );
};
