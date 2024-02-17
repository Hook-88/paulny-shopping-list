import { useEffect, useState, createContext } from "react"
import { NavLink } from "react-router-dom"
import { onSnapshot, doc, addDoc } from "firebase/firestore"
import { db, shoppingListCollection } from "../firebase"
import AddItem from "../components/AddItem/AddItem"
import PageHeader from "../components/PageHeader/PageHeader"
import ShoppingList from "../components/ShoppingList/ShoppingList"
import ShoppingListItem from "../components/ShoppingList/ShoppingListItem/ShoppingListitem"

const ShoppingListContext = createContext()

export default function ShoppingListPage() {
    const [shoppingListItems, setShoppingListItems] = useState(null)

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
        const newNoteRef = await addDoc(shoppingListCollection, newItem)
    }

    return (
        <>
            <ShoppingListContext.Provider value={{addNewItem}}>
                <PageHeader>Shopping list</PageHeader>
                <AddItem />

                {
                    shoppingListItems ?
                    <ShoppingList>
                        {shoppingListItems.map(item => (
                            <ShoppingListItem key={item.id} item={item}>{item.name}</ShoppingListItem>
                        ))}
                    </ShoppingList> : null
                }

                <NavLink to="..">
                    <h4>Back to main</h4>
                </NavLink>
            </ShoppingListContext.Provider>

            
        </>
    )
}

export { ShoppingListContext }