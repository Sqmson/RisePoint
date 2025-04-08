// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
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