import Navigation from "./Navigation"
import Sidebar from "./Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar />
        <Navigation />
    </div>
  )
}

export default Navbar