import { auth } from "../firebase/config";
import { createContext, useContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("error al crear contexto");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      //Actualiza el estado del usuario cuando cambia el estado de autenticación
    });
    return () => unSubscribe(); //limpia el efecto cuando se desmonta el componente
  }, []);

  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return signInWithPopup(auth, responseGoogle);
  };

  const logOut = async () => {
    const response = await signOut(auth);
    console.log(response);

    /* try {
      await signOut(auth);
      // La sesión se cerró correctamente
    } catch (error) {
      // Ocurrió un error al cerrar la sesión
      console.error("Error al cerrar sesión:", error);
    } */
  };

  return (
    <>
      <authContext.Provider
        value={{
          user,
          loginWithGoogle,
          logOut,
        }}
      >
        {children}
      </authContext.Provider>
    </>
  );
};
