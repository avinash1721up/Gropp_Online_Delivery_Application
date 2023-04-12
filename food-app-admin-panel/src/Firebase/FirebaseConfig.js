// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCb50a6kALd5GPfDCT7zEgMuWfY6kL1I8",
  authDomain: "foodapp-6886e.firebaseapp.com",
  projectId: "foodapp-6886e",
  storageBucket: "foodapp-6886e.appspot.com",
  messagingSenderId: "952467852284",
  appId: "1:952467852284:web:52737396a35694ab3c0079"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};