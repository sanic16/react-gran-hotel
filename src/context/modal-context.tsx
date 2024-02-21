import React, { useState, createContext, useContext } from "react";

const ModalContext = createContext({
    isModalOpen: true,
    openModal: () => {},
    closeModal: () => {}
})

export const ModalContextProvider = (
    {
        children
    }: {
        children: React.ReactNode
    }
) => {
    const [isModalOpen, setIsModalOpen] = useState(true)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
    return (
        <ModalContext.Provider value={{
            isModalOpen,
            openModal,
            closeModal
        }}>
            { children }
        </ModalContext.Provider>
    )
}

const useModalContext = () => useContext(ModalContext)

export default useModalContext