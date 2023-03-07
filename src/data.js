/***********************
 * firebase index.jx
 **********************/

import {initializeApp} from "firebase/app";
import {getFirestore, collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore/lite';
import React, {createContext, useEffect, useState} from "react";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

export const firebaseInit = initializeApp(firebaseConfig);

const db = getFirestore(firebaseInit);

const usersCollectionRef = collection(db, "clothes");

export const getUsers = async () => {
    const snapshot = await getDocs(usersCollectionRef);
    const users = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    return users;
}

export async function addUser(price, oldPrice, title) {
    try {
        const docRef = await addDoc(collection(db, "clothes"), {
            price,
            oldPrice,
            title,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


export async function updateUser(docId, price, oldPrice, title) {
    const userRef = doc(db, "clothes", docId);
    try {
        await updateDoc(userRef, {
            price,
            oldPrice,
            title,
        });
        console.log("Document updated successfully");
    } catch (e) {
        console.error("Error updating document: ", e);
    }
}

export async function deleteUser(docId) {
    const userRef = doc(db, "clothes", docId);
    try {
        await deleteDoc(userRef);
        console.log("Document deleted successfully");
    } catch (e) {
        console.error("Error deleting document: ", e);
    }
}


/***********************
 * context index.js
 **********************/

export const AppContext = createContext({})

const Context = ({children}) => {

    const db = getFirestore(firebaseInit);

    const usersCollectionRef = collection(db, "clothes");

    const getClothes = async () => {
        const snapshot = await getDocs(usersCollectionRef);
        const users = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        return users;
    }
    // async function getClothes () {
    //     const snapshot = await getDocs(usersCollectionRef);
    //     const users = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    //     return users;
    // }

    return (
        <AppContext.Provider value={{
            getClothes,
        }}>
            <div>
                {children}
            </div>
        </AppContext.Provider>
    );
};

export default Context;


/***********************
 * home index.js
 **********************/

import {addUser, deleteUser, getUsers, updateUser} from "../firebase";

const Home = () => {
    const {getClothes,deleteClothes} = useContext(appContext);

    const [data, setData] = useState([]);
    useEffect(() => {
        getUsers().then((res) => setData(res)).catch(e => console.log(e))
    }, []);
    return (
        <>
            {data.map((item) => (
                <div key={item.id}>
                    {item.title}
                </div>
            ))}
            <button onClick={() => addUser("121", "241", "new sweaters2")}>addUser</button>
            <button onClick={() => updateUser("AUmMX7WApgBKP6XPX2BI", "66", "666", "new product")}>update</button>
            <button onClick={() => deleteUser("0ONpB27HOU5FLct42GTz")}>delete</button>
        </>
    )
};

export default Home;
