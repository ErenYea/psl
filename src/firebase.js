// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG116yCf7K827M7I8i0b1JQxq0FUjoOOo",
  authDomain: "pslintegreter.firebaseapp.com",
  projectId: "pslintegreter",
  storageBucket: "pslintegreter.appspot.com",
  messagingSenderId: "1018853324810",
  appId: "1:1018853324810:web:3cc68e8c4edd566f9507f3",
  measurementId: "G-PTSPENH3LN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
