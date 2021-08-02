// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBt9cU269EOYMW4K_3q3T1q-mC-5qYO74c",
    authDomain: "blog-vue-a2f67.firebaseapp.com",
    databaseURL: "https://blog-vue-a2f67.firebaseio.com",
    projectId: "blog-vue-a2f67",
    storageBucket: "blog-vue-a2f67.appspot.com",
    messagingSenderId: "790507236164",
    appId: "1:790507236164:web:7250b22194732da32e4511",
    measurementId: "G-DQB6Z7YPD8"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectAuth,projectFirestore, timestamp}