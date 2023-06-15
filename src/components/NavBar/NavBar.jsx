import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Link to="./home">Home</Link>
      <Link to="./miperfil">Mi perfil</Link>
      <Link to="./iniciarSesion">Iniciar Sesión</Link>
      <Link to="./login">Login</Link>
    </div>
  );
};
