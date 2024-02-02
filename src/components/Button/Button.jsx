import { RiDeleteBin5Fill } from "react-icons/ri"

export default function Button({children, onClick}) {



  return (
    <div onClick={onClick}>
      <button>{children}</button>
    </div>
  )
}