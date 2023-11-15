import { db, storage } from "../firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";

export function getPatient(patientId) {
  return getDoc(doc(db, "patients", patientId))
    .then((doc) => {
      if (doc.exists()) {
        return doc.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}

export function getPatientList() {
  onSnapshot(collection(db, "patients"), (snapshot) => {
    const patients = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(patients);
    return patients;
  });
}

export function createPatient(patient) {
  return getDoc(doc(db, "patients", patientId))
    .then((doc) => {
      if (doc.exists()) {
        return doc.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}

export function updatePatient(patient) {
  return getDoc(doc(db, "patients", patientId))
    .then((doc) => {
      if (doc.exists()) {
        return doc.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}

export function deletePatient(patientId) {
  return getDoc(doc(db, "patients", patientId))
    .then((doc) => {
      if (doc.exists()) {
        return doc.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}
