import React, {createContext} from 'react';
import {collection, doc, getDocs, getFirestore, updateDoc} from "firebase/firestore/lite";
import {firebaseInit} from "../firebase";

export const AppContext = createContext({})

const Context = ({children}) => {

    const db = getFirestore(firebaseInit);

    const usersCollectionRef = collection(db, "clothes");

    const getClothes = async () => {
        const snapshot = await getDocs(usersCollectionRef);
        const users = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        return users;
    }

    const updateUser = async (docId, name, newPrice, oldPrice) => {
        console.log(docId)
        console.log(newPrice)
        const clothesRef = doc(db, "clothes", docId);
        try {
            await updateDoc(clothesRef, { name, newPrice, oldPrice });
            console.log("Update successfully");
        } catch (e) {
            console.log(e, "Error updating");
        }
    };
    // async function updateUser(docId, price, oldPrice, title) {
    //     const userRef = doc(db, "clothes", docId);
    //     try {
    //         await updateDoc(userRef, {
    //             price,
    //             oldPrice,
    //             title,
    //         });
    //         console.log("Document updated successfully");
    //     } catch (e) {
    //         console.error("Error updating document: ", e);
    //     }
    // }

    return (
        <AppContext.Provider value={{
            getClothes,
            updateUser
        }}>
            <div>
                {children}
            </div>
        </AppContext.Provider>
    );
};

export default Context;
