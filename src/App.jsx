import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MainContent from "./components/MainContent/MainContent"
import Form from "./components/MainContent/Form/Form"
import Button from "./components/Button/Button"

import { RiDeleteBin5Fill } from "react-icons/ri"

import './App.css'


function App() {
  
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <>
      <Header />
      <MainContent>
        <Form onSubmit={handleSubmit}>
          <input type="text" placeholder="Gaseosa..." className="form--text-input"/>
          <Button onClick={() => console.log("clicked the button!")}>
            Add to Shopping list
          </Button>
        </Form>
      </MainContent>
      <Footer />
    </>
  )
}

export default App
