import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore/lite";
import React, { createContext, useState } from "react";
import { getFirestore } from "firebase/firestore/lite";
import { firebaseInit } from "../firebase/index.js";

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const toggleIsAdmin = (bool) => {
    setIsAdmin(bool);
  };
  const db = getFirestore(firebaseInit);
  const clothesCollectionRef = collection(db, "clothes");

  const getClothes = async () => {
    const snapshot = await getDocs(clothesCollectionRef);
    const clothes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return clothes;
  };
  const getToys = async () => {
    const snapshot = await getDocs(collection(db, "toys"));
    const toys = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return toys;
  };
  const addClothes = async (name, newPrice, oldPrice) => {
    try {
      const docRef = await addDoc(clothesCollectionRef, {
        name,
        newPrice,
        oldPrice,
      });
      console.log("Clothes add", docRef.id);
    } catch (e) {
      console.log(e, "Error to add");
    }
  };
  const updateClothes = async (docId, name, newPrice, oldPrice) => {
    const clothesRef = doc(db, "clothes", docId);
    try {
      await updateDoc(clothesRef, { name, newPrice, oldPrice });
      console.log("Update successfully");
    } catch (e) {
      console.log(e, "Error updating");
    }
  };
  const deleteClothes = async (docId) => {
    const clothesRef = doc(db, "clothes", docId);
    try {
      await deleteDoc(clothesRef);
      console.log("Deleted");
    } catch (e) {
      console.log(e, "delete failed");
    }
  };
  return (
    <Context.Provider
      value={{
        getClothes,
        addClothes,
        updateClothes,
        deleteClothes,
        getToys,
        toggleIsAdmin,
        isAdmin,
      }}
    >
      {children}
    </Context.Provider>
  );
};
