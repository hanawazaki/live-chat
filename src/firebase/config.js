// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {

    apiKey: "AIzaSyDOmfq6yV7r3X4UPlHco5ImcAro49zL6qY",

    authDomain: "han-vue-projects.firebaseapp.com",

    databaseURL: "https://han-vue-projects-default-rtdb.firebaseio.com",

    projectId: "han-vue-projects",

    storageBucket: "han-vue-projects.appspot.com",

    messagingSenderId: "1094291669744",

    appId: "1:1094291669744:web:5972936045270786f17835"

};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }