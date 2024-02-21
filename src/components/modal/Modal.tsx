import useModalContext from "../../context/modal-context"
import ReactDOM from 'react-dom'
import './modal.css'

const Modal = () => {
  
  const { isModalOpen, closeModal } = useModalContext()  
    
  return (
    <>
        { isModalOpen && (
            ReactDOM.createPortal(
                <>
                    <div 
                        onClick={closeModal}
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