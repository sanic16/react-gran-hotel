import React, { useState, createContext, useContext } from "react";

const MenuContext = createContext({
    isMenuOpen: false,
    openMenuHandler: () => {},
    closeMenuHandler: () => {},
    toggleMenuHandler: () => {}
})

export const MenuContextProvider = (
    {
        children
    }: {
        children: React.ReactNode
    }
) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const openMenuHandler = () => setIsMenuOpen(true)
    const closeMenuHandler = () => setIsMenuOpen(false)
    const toggleMenuHandler = () => setIsMenuOpen(prevState => !prevState)
    return (
        <MenuContext.Provider value={{
            isMenuOpen,
            openMenuHandler,
            closeMenuHandler,
            toggleMenuHandler
        }}>
            { children }
        </MenuContext.Provider>
    )
}

const useMenuContext = () => useContext(MenuContext)

export default useMenuContext