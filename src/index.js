import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//падает //import firebase from "firebase/compat/app"


//import "firebase/compat/auth"
//import "firebase/compat/firestore"

import { initializeApp } from "firebase/app";

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD9DP_zrzipwoNN6NPF5Z9Zg76cN7eZr_c",
  authDomain: "chat-react-93b91.firebaseapp.com",
  projectId: "chat-react-93b91",
  storageBucket: "chat-react-93b91.appspot.com",
  messagingSenderId: "541716026068",
  appId: "1:541716026068:web:0b17327c8f246fbd792141",
  measurementId: "${config.measurementId}"
};


// Initialize Firebase
export const Context = createContext(null); 

const app = initializeApp(firebaseConfig);
const auth = firebase.auth();             //падает
const firestore = firebase.firestore();   //падает

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
