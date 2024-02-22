import About from "../components/about/About"
import Customers from "../components/customers/Customers"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Modal from "../components/modal/Modal"
import Sidebar from "../components/navbar/Sidebar"
import Rooms from "../components/rooms/Rooms"

const Home = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <About />
      <Rooms />
      <Customers />
      <Footer />
      <Modal />
    </>
  )
}

export default Home