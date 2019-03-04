import Rebase from "re-base";
import firebase from "firebase";


const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBXJYUvRG8fHjBcEyPw337u86j7WnJXLJw",
    authDomain: "catch-of-the-day-wes-2.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-wes-2.firebaseio.com",
    
 });

const base = Rebase.createClass(firebaseApp.database());


//this is a named export

export { firebaseApp };

// this is a default export

export default base;