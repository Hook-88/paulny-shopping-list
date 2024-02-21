import { useEffect, useState, createContext } from "react"
import { NavLink } from "react-router-dom"
import { onSnapshot, doc, addDoc, deleteDoc, setDoc, updateDoc, getDoc } from "firebase/firestore"
import { db, shoppingListCollection } from "../firebase"
import useToggle from "../Hooks/useToggle"
import AddItem from "../components/AddItem/AddItem"
import PageHeader from "../components/PageHeader/PageHeader"
import ShoppingList from "../components/ShoppingList/ShoppingList"
import ShoppingListItem from "../components/ShoppingList/ShoppingListItem/ShoppingListitem"
import MultiAction from "../components/MultiAction/MultiAction"


const ShoppingListContext = createContext()

export default function ShoppingListPage() {
    const [shoppingListItems, setShoppingListItems] = useState(null)
    const [showAddItem, toggleAddItem] = useToggle(false)
    const [itemsChecked, setItemsChecked] = useState(false)

    useEffect(() => {
        const unsubscribe = onSnapshot(shoppingListCollection, (snapshot) => {
            //sync up with local state


            const itemArray = 
                snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }))
                .sort((a, b) => b.date - a.date)
                .sort((a, b) => a.checked - b.checked)

            setShoppingListItems(itemArray)
        })

        return unsubscribe
    },[])

    useEffect(() => {
        if (shoppingListItems && shoppingListItems.length > 0) {
            const hasItemChecked = shoppingListItems.some(item => item.checked === true)
            
            if(hasItemChecked) {
                setItemsChecked(true)

            } else {
                setItemsChecked(false)
            }
        }

    },[shoppingListItems])

    async function addNewItem(value) {
        const newItem = {
            name: value,
            checked: false,
            date: Date.now()
        }
        const newItemRef = await addDoc(shoppingListCollection, newItem)
    }

    async function deleteItem(itemId) {
        const docRef = doc(db, "shoppingList", itemId)
        await deleteDoc(docRef)
    }

    async function toggleCheckItem(itemId) {
        const docRef = doc(db, "shoppingList", itemId)
        // get snap of doc to get current checked value 
        const docSnap = await getDoc(docRef)
        await updateDoc(docRef, {checked: !docSnap.data().checked}) 
    }

    async function updateItemName(itemId, value) {
        const docRef = doc(db, "shoppingList", itemId)
        await updateDoc(docRef, { name: value})

    }

    function deleteItems() {
        shoppingListItems.forEach(item => {
            
            if (item.checked) {
                deleteItem(item.id)
            }

        })
    }

    return (
        <>
            <ShoppingListContext.Provider value={{addNewItem, deleteItem, toggleCheckItem, updateItemName, deleteItems}}>
                <PageHeader onClick={toggleAddItem}>Shopping list</PageHeader>
                <main style={
                    {
                        padding: "4rem .5rem 0 .5rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }
                }>
                    {showAddItem && <AddItem />}
                    

                    {
                        shoppingListItems &&  shoppingListItems.length > 0 ?
                        <ShoppingList>
                            {shoppingListItems.map(item => (
                                <ShoppingListItem key={item.id} item={item} />
                                ))}
                        </ShoppingList> : null
                    }

                    {
                        itemsChecked && <MultiAction />
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