import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {

};
firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export const auth = firebase.auth();

export default firebase;
