import { useState } from "react"
import Navigation from "./Navigation"
import Sidebar from "./Sidebar"

const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar)
    console.log('toggleSidebar:', toggleSidebar)
  }

  return (
    <div className="navbar">
        <Sidebar 
          handleToggleSidebar={handleToggleSidebar}
          openSidebar={toggleSidebar}
        />
        <Navigation 
          openSidebar={toggleSidebar}
        />
    </div>
  )
}

export default Navbar