// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsmna-_mVSH78oNFaUHYEFqqE9pwBBq3I",
  authDomain: "rainlady-98c21.firebaseapp.com",
  databaseURL: "https://rainlady-98c21-default-rtdb.firebaseio.com",
  projectId: "rainlady-98c21",
  storageBucket: "rainlady-98c21.appspot.com",
  messagingSenderId: "275026313067",
  appId: "1:275026313067:web:61b15590f6a4f71f8b962e",
  measurementId: "G-4RMCKNKEP2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = firebase.getAnalytics(app);

console.log("I will now ask you for your name.");
process.stdin.setEncoding('utf8');
var name;
process.stdin.on('readable', function() {
    name = process.stdin.read();
    if (name !== null) {
        console.log("Hello ".concat(name, ". How are you"));
        process.exit();
    }
});

  // Get a reference to the database service
  var database = firebase.database();
  var starCountRef = firebase.database().ref("conpump1").set(10);
console.log('^.^' )