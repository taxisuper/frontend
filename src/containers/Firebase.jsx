import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
   databaseURL: "https://taxisuper.firebaseio.com/",
};

let db = firebase.initializeApp(config).database();

module.exports = db;
