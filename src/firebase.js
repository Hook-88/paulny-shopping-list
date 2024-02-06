import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB1Q3FrmaRbF9PD-o_8U5ohPqgYPj4UiNo",
  authDomain: "paulny-shopping-list.firebaseapp.com",
  projectId: "paulny-shopping-list",
  storageBucket: "paulny-shopping-list.appspot.com",
  messagingSenderId: "204406196939",
  appId: "1:204406196939:web:7b8e20fa22d93b1537e94e"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const shoppingListCollection = collection(db, "shoppingList")