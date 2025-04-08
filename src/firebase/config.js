import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDdKp0beYg4s41bNZABBTblJM0Tfh_oP-U",
  authDomain: "risepoint-ced19.firebaseapp.com",
  projectId: "risepoint-ced19",
  storageBucket: "risepoint-ced19.firebasestorage.app",
  messagingSenderId: "448563012919",
  appId: "1:448563012919:web:8e210336e7ff0e0148e6b2",
  measurementId: "G-HMRW1DSRX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app; 