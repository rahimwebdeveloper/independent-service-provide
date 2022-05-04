// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBpNr7YpY25CE55_giWLDcXX2sfwHVelA",
  authDomain: "independent-service-prov-6d7cc.firebaseapp.com",
  projectId: "independent-service-prov-6d7cc",
  storageBucket: "independent-service-prov-6d7cc.appspot.com",
  messagingSenderId: "864492672807",
  appId: "1:864492672807:web:f2379a69bbaee99407fb02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;