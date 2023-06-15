import { initializeApp } from "firebase/app"; //se trae el modulo que inicializa la aplicación
import { getAuth } from "firebase/auth"; //se importa el modulo del login de google

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlUan_S1mc1w6OFHk8MGvypIYwxCPfGrI",
  authDomain: "react-firebase-b215b.firebaseapp.com",
  projectId: "react-firebase-b215b",
  storageBucket: "react-firebase-b215b.appspot.com",
  messagingSenderId: "169933278326",
  appId: "1:169933278326:web:0ac3c18ac801dd149da357",
}; //configuración de firebase, se guarda dentro de una constante

// Initialize Firebase
const app = initializeApp(firebaseConfig); //se pasa todo el objeto para que pueda conectarse a la api de firebase
export const auth = getAuth(app);
