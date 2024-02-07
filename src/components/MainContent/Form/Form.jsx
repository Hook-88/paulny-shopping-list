import "./Form.css"

export default function Form({children, ...rest}) {
  
  return (
    <form className="card form--container" {...rest}>
      {children}
    </form>
  )
}