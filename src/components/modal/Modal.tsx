import ReactDOM from 'react-dom'
import './modal.css'
import useMenuContext from '../../context/menu-context'

const Modal = () => {
  
  const { isMenuOpen, closeMenuHandler } = useMenuContext()
    
  return (
    <>
        { isMenuOpen && (
            ReactDOM.createPortal(
                <>
                    <div 
                        onClick={closeMenuHandler}
                        className="backdrop"
                    >

                    </div>
                </>, 
                document.getElementById("modal") as HTMLElement
            )
        ) }
    </>
  )
}

export default Modal