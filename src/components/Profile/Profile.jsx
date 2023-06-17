import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    navigate("/login");
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Nombre: {user?.displayName}</p>
      <p>Email: {user?.email}</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};
