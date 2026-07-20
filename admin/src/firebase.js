import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBo0ldzIAwgUbS31wn-sQ41N4WEIM5OT00",
  authDomain: "gen-lang-client-02323438-4fe71.firebaseapp.com",
  databaseURL: "https://gen-lang-client-02323438-4fe71-default-rtdb.firebaseio.com",
  projectId: "gen-lang-client-02323438-4fe71",
  storageBucket: "gen-lang-client-02323438-4fe71.firebasestorage.app",
  messagingSenderId: "97089403770",
  appId: "1:97089403770:web:331702d7d94ffc32b9b4c3",
  measurementId: "G-8LS3MPMFJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
