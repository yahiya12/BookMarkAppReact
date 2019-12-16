import firebase from 'firebase';

const config = {
    apiKey:"AIzaSyAhEQg7XJyxiN-ZmkFgZDpWCMAOzqc0Mvw",
    authDomain:"login-166df.firebaseapp.com",
    databaseURL:"https://login-166df.firebaseio.com",
    projectId:"login-166df",
    storageBucket:"login-166df.appspot.com",
    messagingSenderId:"211598480920",
    appId:"1:211598480920:web:a24286469d48c9cffcd56d"
};

const fire = firebase.initializeApp(config);
export default fire;