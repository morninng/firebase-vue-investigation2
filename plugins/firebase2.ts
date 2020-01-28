import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import'firebase/database'
import "firebase/functions";
import "firebase/storage";

console.log("firebase init");

const config = {
  apiKey: process.env.FIREBASE_API_KEY || "",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "",
  databaseURL: process.env.FIREBASE_DATABASE_URL || "",
  projectId: process.env.FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "",
  timestampsInSnapshots: true,
};

firebase.initializeApp(config);

const db = firebase.firestore();

export const FIREBASE_REF_ROOMNAME = 'h2-chat'
export const dbChatCollection = db.collection(FIREBASE_REF_ROOMNAME);


export default firebase;

