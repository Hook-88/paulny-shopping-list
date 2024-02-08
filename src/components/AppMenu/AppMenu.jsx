import "./AppMenu.css"

export default function AppMenu({children}) {

  return (
    <div className="app-menu--container card">
      {children}
    </div>
  )
  
}