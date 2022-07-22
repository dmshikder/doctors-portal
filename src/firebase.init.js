// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQqIFczsuhFcSFEvezf-YSJX70DBitJTY",
  authDomain: "doctors-portal-2fe2a.firebaseapp.com",
  projectId: "doctors-portal-2fe2a",
  storageBucket: "doctors-portal-2fe2a.appspot.com",
  messagingSenderId: "1015495623628",
  appId: "1:1015495623628:web:368aa2ee74e248ced65369"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;