// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAlV71LDfsr6tqs3Lsv5C2QXUXnkZ-DUFg",
    authDomain: "furia-fan.firebaseapp.com",
    projectId: "furia-fan",
    storageBucket: "furia-fan.firebasestorage.app",
    messagingSenderId: "141489447581",
    appId: "1:141489447581:web:42e5f048b0f400cdb3ea74",
    measurementId: "G-D2M9QEB2BW"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Exportar serviços do Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;