// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  Firestore,
  getDocFromServer,
  getDocs,
  getDoc,
  deleteDoc,
} from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKn2evN91MVTfrAQgL23y1v8gHcVO6oU8",
  authDomain: "blitz-wallet-82b39.firebaseapp.com",
  projectId: "blitz-wallet-82b39",
  storageBucket: "blitz-wallet-82b39.appspot.com",
  messagingSenderId: "129198472150",
  appId: "1:129198472150:web:86511e5250364ee1764277",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addDataToCollection(dataObject, collection, uuid) {
  try {
    const docRef = doc(db, `${collection}/${uuid}`);

    let docData = dataObject;
    // console.log(docData, 'DOC DATA');
    docData["uuid"] = uuid;
    setDoc(docRef, docData, { merge: true });

    console.log("Document written with ID: ", docRef.id);
    return new Promise((resolve) => {
      resolve(true);
    });
  } catch (e) {
    console.error("Error adding document: ", e);
    return new Promise((resolve) => {
      resolve(false);
    });
  }
}

export async function getDataFromCollection(collectionName, uuid) {
  try {
    const docRef = doc(db, `${collectionName}`, `${uuid}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();

      return new Promise((resolve) => {
        resolve(data);
      });
    } else throw new Error("error");
  } catch (err) {
    return new Promise((resolve) => {
      resolve(false);
    });
    console.log(err);
  }
}

export async function deleteDataFromCollection(collectionName, uuid) {
  try {
    const data = await getDataFromCollection(collectionName, uuid);

    let newObject = {};

    newObject["amountSent"] = data["amountSent"];
    newObject["uuid"] = data["uuid"];
    newObject["k1"] = data["k1"];
    newObject["totalAmountToSend"] = data["totalAmountToSend"];
    newObject["pushToken"] = null;

    await addDataToCollection(newObject, collectionName, uuid);

    return new Promise((resolve) => {
      resolve(true);
    });
  } catch (err) {
    return new Promise((resolve) => {
      resolve(false);
    });
    console.log(err);
  }
}
