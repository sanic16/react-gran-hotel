import About from "../components/about/About"
import Customers from "../components/customers/Customers"
import Header from "../components/header/Header"
import Navbar from "../components/navbar/Navbar"
import Rooms from "../components/rooms/Rooms"

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Rooms />
      <Customers />
    </>
  )
}

export default Home