import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBxTXqUU073VVV7Ghy9JXR4FLkF_gc9bCs",
  authDomain: "frontblog-cf6cc.firebaseapp.com",
  projectId: "frontblog-cf6cc",
  storageBucket: "frontblog-cf6cc.appspot.com",
  messagingSenderId: "583032431241",
  appId: "1:583032431241:web:43680bb5f6ead7fc8e9c58"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }