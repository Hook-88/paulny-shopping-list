import { createContext, useState, useEffect } from "react"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MainContent from "./components/MainContent/MainContent"
import Form from "./components/MainContent/Form/Form"
import Button from "./components/Button/Button"
import ShoppingList from "./components/MainContent/ShoppingList/ShoppingList"
import { onSnapshot, addDoc, doc, deleteDoc, updateDoc  } from "firebase/firestore"
import { shoppingListCollection, db } from "./firebase"
import { GoTriangleDown } from "react-icons/go"


import './App.css'
import DoubleButton from "./components/Button/DoubleButton"
 
const AppContext = createContext()

function App() {
  const [shoppingItems, setShoppingItems] = useState(null)
  const [newItem, setNewItem] = useState("")
  const [showAddForm, setShowAddForm] = useState(false)

  function toggleForm() {
    setShowAddForm(prevShowAddForm => !prevShowAddForm)
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    AddItemToShoppingList()
  }

  async function deleteItem(itemID) {
    const docRef = doc(db, "shoppingList", itemID)
    await deleteDoc(docRef)
  }
// TODO add trim to string
  async function updateItem(itemID, prop, value) {
    const docRef = doc(db, "shoppingList", itemID)

    await updateDoc(docRef, {[prop]: value})

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

//use effect for snapshot
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
      <Header handleClick={toggleForm}/>
      <AppContext.Provider value={{shoppingItems, deleteItem, updateItem}}>
        <MainContent>
          {
          showAddForm && 
          <Form onSubmit={handleSubmit} onChange={handleFormChange}>
            <input type="text" placeholder="Gaseosa..." className="form--text-input" value={newItem} onChange={handleFormChange} required/>
              <DoubleButton
                style={
                  {
                    justifySelf: "end"
                  }
                }
              >
                <Button type="submit" variant="action">
                  Add to Shopping list
                </Button>
                <Button className="neutral" type="button">
                  <GoTriangleDown />
                </Button>
              </DoubleButton>
          </Form> 
          }

          <ShoppingList />

        </MainContent>
      </AppContext.Provider>
      

      
      <Footer />
    </>
  )
}

export default App
export { AppContext }
