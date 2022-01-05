import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSWnf8qVGF6H11nxfFnI2IzfD-7OuEfNw",
  authDomain: "test-app-3e0f1.firebaseapp.com",
  databaseURL: "https://test-app-3e0f1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-app-3e0f1",
  storageBucket: "test-app-3e0f1.appspot.com",
  messagingSenderId: "82717256281",
  appId: "1:82717256281:web:a110b69896fdb30d3adf48"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)