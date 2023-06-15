import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLoginGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
    navigate("/");
  };

  return (
    <>
      <div>
        <form>
          <div>
            <button onClick={(e) => handleLoginGoogle(e)}>
              Iniciar sesion con google
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
