import Form from "../MainContent/Form/Form"
import TextInputField from "../TextInputField/TextInputField"
import DoubleButton from "../Button/DoubleButton"
import Button from "../Button/Button"
import Menu from "../Menu/Index"
import { AppContext } from "../../App"
import { useContext } from "react"
import { GoTriangleDown } from "react-icons/go"

export default function AddItemForm() {
  const { handleSubmit, handleFormChange, newItem, deleteCheckedItems } = useContext(AppContext)

  return (
    <Form onSubmit={handleSubmit} style={{position:"relative"}}>
      <TextInputField placeholder="Gaseosa..." value={newItem} onChange={handleFormChange} variant="pill" required/>
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
        <Menu>
          <Menu.Button type="button" className="neutral">
              <GoTriangleDown />
          </Menu.Button>
          <Menu.DropDown>
          <Menu.Item onClick={deleteCheckedItems}>Delete checked items</Menu.Item>
          </Menu.DropDown>
        </Menu>

        
      </DoubleButton>
    </Form> 
  )
  
}