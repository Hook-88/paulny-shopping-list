import { useEffect, useState, createContext } from "react"
import { NavLink } from "react-router-dom"
import { onSnapshot, doc, addDoc } from "firebase/firestore"
import { db, shoppingListCollection } from "../firebase"
import useToggle from "../Hooks/useToggle"
import AddItem from "../components/AddItem/AddItem"
import PageHeader from "../components/PageHeader/PageHeader"
import ShoppingList from "../components/ShoppingList/ShoppingList"
import ShoppingListItem from "../components/ShoppingList/ShoppingListItem/ShoppingListitem"
import getStrFirstCharCap from "../Utility/getStrFirstCharCap"

const ShoppingListContext = createContext()

export default function ShoppingListPage() {
    const [shoppingListItems, setShoppingListItems] = useState(null)
    const [showAddItem, toggleAddItem] = useToggle(false)

    useEffect(() => {
        const unsubscribe = onSnapshot(shoppingListCollection, (snapshot) => {
            //sync up with local state
            const itemArray = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))

            setShoppingListItems(itemArray)
        })

        return unsubscribe
    },[])

    async function addNewItem(value) {
        const newItem = {
            name: value
        }
        const newItemRef = await addDoc(shoppingListCollection, newItem)
    }

    return (
        <>
            <ShoppingListContext.Provider value={{addNewItem}}>
                <PageHeader onClick={toggleAddItem}>Shopping list</PageHeader>
                <main style={
                    {
                        padding: "0 1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem"
                    }
                }>
                    {showAddItem && <AddItem />}

                    {
                        shoppingListItems &&  shoppingListItems.length > 0 ?
                        <ShoppingList>
                            {shoppingListItems.map(item => (
                                <ShoppingListItem key={item.id} item={item}>{getStrFirstCharCap(item.name)}</ShoppingListItem>
                                ))}
                        </ShoppingList> : null
                    }

                </main>
                <NavLink to="..">
                    <h4>Back to main</h4>
                </NavLink>
            </ShoppingListContext.Provider>

            
        </>
    )
}

export { ShoppingListContext }