import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3Jqn5m9fpmO6aJqdrIdU_J6toaRkQLqQ",
  authDomain: "eshop-eccomerce.firebaseapp.com",
  projectId: "eshop-eccomerce",
  storageBucket: "eshop-eccomerce.appspot.com",
  messagingSenderId: "666084696905",
  appId: "1:666084696905:web:d5e2da6244540730aaf098",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
