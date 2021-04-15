import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA3ivzIm7ZFNqBnvIfQ-HxsRV2xkOfSiEg",
    authDomain: "trackthedip.firebaseapp.com",
    projectId: "trackthedip",
    storageBucket: "trackthedip.appspot.com",
    messagingSenderId: "584536882370",
    appId: "1:584536882370:web:77227587479fd8f34c8f5b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };