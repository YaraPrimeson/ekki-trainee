import {initializeApp} from "firebase/app";
import {getFirestore, collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore/lite';

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


