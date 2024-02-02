import "./Form.css"

export default function Form({children, ...rest}) {
  
  return (
    <form className="form--container" {...rest}>
      {children}
    </form>
  )
}