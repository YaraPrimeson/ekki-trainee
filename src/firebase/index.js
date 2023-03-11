import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBTeLfetJy4ogfZTfcuImMEY5hyH6D1uo",
  authDomain: "ekki-189f3.firebaseapp.com",
  projectId: "ekki-189f3",
  storageBucket: "ekki-189f3.appspot.com",
  messagingSenderId: "417774990769",
  appId: "1:417774990769:web:7ceb9586881292d9ee3990",
};

export const firebaseInit = initializeApp(firebaseConfig);