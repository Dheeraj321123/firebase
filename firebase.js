  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries



//   fireStore Database
  import {getFirestore, collection, addDoc, getDocs,updateDoc,doc,deleteDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA9HLwET8VXfIQPwDj4UGrL7K8nWUfvhmk",
    authDomain: "fir-f530d.firebaseapp.com",
    projectId: "fir-f530d",
    storageBucket: "fir-f530d.firebasestorage.app",
    messagingSenderId: "702415457872",
    appId: "1:702415457872:web:1426267b82c54ed684cb55"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  export{
    app,
    collection,
    db,
    addDoc,
    getDocs,
    updateDoc,
    doc,
    deleteDoc

  }