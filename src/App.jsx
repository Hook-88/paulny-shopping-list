import { useRef, createContext, useState } from "react"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MainContent from "./components/MainContent/MainContent"
import Form from "./components/MainContent/Form/Form"
import Button from "./components/Button/Button"
import ShoppingList from "./components/MainContent/ShoppingList/ShoppingList"

import { RiDeleteBin5Fill } from "react-icons/ri"

import './App.css'
import { nanoid } from "nanoid"

const AppContext = createContext()
const slDummyData = [{name: "cerveza", id: "11656687"}]

function App() {
  const [shoppingItems, setShoppingItems] = useState(null)
  const [newItem, setNewItem] = useState("")
  
  
  function handleSubmit(event) {
    event.preventDefault()
    AddItemToShoppingList()
  }

  function AddItemToShoppingList() {
    setShoppingItems(prevItems => {
      const itemObj = {
        name: newItem,
        id: nanoid()
      }
      
      return prevItems ? [...prevItems, itemObj] : [itemObj]
    })
    setNewItem("")
  }

  function handleFormChange(event) {
    const { value } = event.target
    setNewItem(value)
  }

  return (
    <>
      <Header />
      <AppContext.Provider value={{shoppingItems}}>
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
