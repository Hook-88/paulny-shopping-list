import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ShoppingListPage from "./pages/ShoppingListPage"
import RecipePage from "./pages/RecipePage"
import "./App.css"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
