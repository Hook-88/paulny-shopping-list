import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddItem from "./components/AddItem/AddItem"
import AppLayout from "./components/AppLayout"
import "./App.css"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Header />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
