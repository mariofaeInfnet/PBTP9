// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPcl3lTyeXaarGss5HJR-99k8jn647HKw",
  authDomain: "pbrctntv.firebaseapp.com",
  projectId: "pbrctntv",
  storageBucket: "pbrctntv.appspot.com",
  messagingSenderId: "742791701768",
  appId: "1:742791701768:web:80158860c391b7acfab8bd",
  measurementId: "G-9RF4TPKKR1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
