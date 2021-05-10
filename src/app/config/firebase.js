import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDcXNuQ5D8bDgIZujGS8-R0E7QuNrQGbh8",
    authDomain: "event-app-8d31f.firebaseapp.com",
    databaseURL: "https://event-app-8d31f-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "event-app-8d31f",
    storageBucket: "event-app-8d31f.appspot.com",
    messagingSenderId: "842491521452",
    appId: "1:842491521452:web:d4a5ee4b1192eac865b209"

}
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;