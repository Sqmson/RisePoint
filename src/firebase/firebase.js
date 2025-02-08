// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_EApxcqnyoZNUz3T2y631IQaM8wlLwu8",
  authDomain: "risepoint-52f8e.firebaseapp.com",
  projectId: "risepoint-52f8e",
  storageBucket: "risepoint-52f8e.firebasestorage.app",
  messagingSenderId: "1079296118249",
  appId: "1:1079296118249:web:e5abae5fb92f67d05d0f78",
  measurementId: "G-MEJVXHX00Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the initialized Firebase app and analytics
export { app, analytics };

// Additional Firebase services can be initialized here
// For example, if you want to use Firestore, Authentication, etc., you can add them as follows:

// Import additional Firebase services
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Initialize additional Firebase services
const db = getFirestore(app);
const auth = getAuth(app);

// Export additional Firebase services
export { db, auth };

// filepath: /d:/year 2/SEM 2/Software Engineering/RisePoint/src/components/FirestoreData.js

import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase'; // Import Firestore

const FirestoreData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from Firestore
    const fetchData = async () => {
      const querySnapshot = await db.collection('your-collection').get();
      setData(querySnapshot.docs.map(doc => doc.data()));
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Firestore</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export { FirestoreData};

// filepath: /d:/year 2/SEM 2/Software Engineering/RisePoint/src/App.js

import React from 'react';
import FirestoreData from './components/FirestoreData';

const App = () => {
  return (
    <div>
      <h1>Welcome to RisePoint</h1>
      <FirestoreData />
    </div>
  );
};

export default App;