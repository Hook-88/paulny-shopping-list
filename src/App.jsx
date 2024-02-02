import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MainContent from "./components/MainContent/MainContent"
import Form from "./components/MainContent/Form/Form"
import Button from "./components/Button/Button"

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
          <Button>
            <button>click me!</button>
          </Button>
        </Form>
      </MainContent>
      <Footer />
    </>
  )
}

export default App
