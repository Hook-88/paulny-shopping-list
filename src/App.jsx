import { createContext, useState, useEffect } from "react"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MainContent from "./components/MainContent/MainContent"
import Form from "./components/MainContent/Form/Form"
import Button from "./components/Button/Button"
import ShoppingList from "./components/MainContent/ShoppingList/ShoppingList"
import { onSnapshot, addDoc, doc, deleteDoc, updateDoc, getDoc  } from "firebase/firestore"
import { shoppingListCollection, db } from "./firebase"

import './App.css'
 
const AppContext = createContext()

function App() {
  const [shoppingItems, setShoppingItems] = useState(null)
  const [newItem, setNewItem] = useState("")
  
  function handleSubmit(event) {
    event.preventDefault()
    AddItemToShoppingList()
  }

  async function deleteItem(itemID) {
    const docRef = doc(db, "shoppingList", itemID)
    await deleteDoc(docRef)
  }

  async function updateItem(itemID, prop) {
    if (prop === "checked") {
      togglePropInDoc(itemID, prop)
    }
    

  }

  async function togglePropInDoc(itemID, prop) {
    const docRef = doc(db, "shoppingList", itemID)
    const docSnap = await getDoc(docRef)

    await updateDoc(docRef, {[prop]: !docSnap.data().checked})

  }

  async function AddItemToShoppingList() {
    // create new item object
    const itemObj = {
      name: newItem.toLowerCase(),
      checked: false
    }
    // ref to doc, can use to get ID
    const newItemReg = await addDoc(shoppingListCollection, itemObj)
    
    setNewItem("")
  }

  function handleFormChange(event) {
    const { value } = event.target
    setNewItem(value)
  }

  useEffect(() => {
    const unSubscribe = onSnapshot(shoppingListCollection, function(snapshot) {
      // sync up database with local state
      const itemsArray = snapshot.docs.map(doc => {
        
        return {
          ...doc.data(),
          id: doc.id
        }
      })

      setShoppingItems(itemsArray)
    })

    return unSubscribe
  },[])

  return (
    <>
      <Header />
      <AppContext.Provider value={{shoppingItems, deleteItem, updateItem}}>
        <MainContent>
          <Form onSubmit={handleSubmit} onChange={handleFormChange}>
            <input type="text" placeholder="Gaseosa..." className="form--text-input" value={newItem}/>
            <Button>
              Add to Shopping list
            </Button>
          </Form>

          <ShoppingList />

        </MainContent>
      </AppContext.Provider>
      <Footer />
    </>
  )
}

export default App
export { AppContext }
