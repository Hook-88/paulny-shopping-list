import "./Header.css"

export default function Header({handleClick}) {

  return (
    <header className="card app--header" onClick={handleClick}>
      <h1>Paulny Shopping List</h1>
      <p className="light-text">Mas descuento!</p>
    </header>
  )

}