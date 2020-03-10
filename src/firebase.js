import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBdxBnVRkIrK5vDvO3Ns7jv5vAHc-cIaEw",
    authDomain: "todoist-app-392fc.firebaseapp.com",
    databaseURL: "https://todoist-app-392fc.firebaseio.com",
    projectId: "todoist-app-392fc",
    storageBucket: "todoist-app-392fc.appspot.com",
    messagingSenderId: "483771765757",
    appId: "1:483771765757:web:4234a0f34bca61358b3f94"
});

export { firebaseConfig as firebase };