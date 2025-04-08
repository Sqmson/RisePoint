import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  // apiKey: "AIzaSyDdKp0beYg4s41bNZABBTblJM0Tfh_oP-U",
  // authDomain: "risepoint-ced19.firebaseapp.com",
  // projectId: "risepoint-ced19",
  // storageBucket: "risepoint-ced19.firebasestorage.app",
  // messagingSenderId: "448563012919",
  // appId: "1:448563012919:web:8e210336e7ff0e0148e6b2",
  // measurementId: "G-HMRW1DSRX0"
  apiKey: "AIzaSyDWOdInJgw2ogwJOcSg11pERsZLaLxkAEg",
  authDomain: "risepoint-67d20.firebaseapp.com",
  projectId: "risepoint-67d20",
  storageBucket: "risepoint-67d20.firebasestorage.app",
  messagingSenderId: "87224521053",
  appId: "1:87224521053:web:08c9cb06171afd1c0658b4",
  measurementId: "G-ML2L7F5EYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app; 