import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const APIKEY = process.env.REACT_APP_APIKEY;

const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: 'smart-planner-b33ce.firebaseapp.com',
    projectId: 'smart-planner-b33ce',
    storageBucket: 'smart-planner-b33ce.appspot.com',
    messagingSenderId: '735269039992',
    appId: '1:735269039992:web:643cf8b0161732a9e0a28d',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// firebase.firestore().enablePersistence()

export { firebase, db };
