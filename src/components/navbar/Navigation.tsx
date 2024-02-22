import classes from './Navigation.module.css'
import { FaSearch } from 'react-icons/fa'
import { navigation_data } from '../../utils/data'
import useMenuContext from '../../context/menu-context'
import { useEffect } from 'react'

const Navigation = () => {
  const { isMenuOpen, closeMenuHandler } = useMenuContext()
  
  useEffect(() => {
    if(isMenuOpen){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'auto'
    }
    return () => {
        document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  return (
    <nav className={`${classes['navigation-wrapper']} ${isMenuOpen ? classes['navigation-toggle'] : undefined }`}>
        <div className={classes.navigation}>

            <div className={classes['navigation-header']}>
                <h1 className={classes['navigation-heading']}>El Gran Hotel</h1>

                <form className={classes['navigation-search']}>
                    <input type="text" className={classes['navigation-search-input']} placeholder='Search...'/>
                    <button className={classes['navigation-search-btn']}>
                        <FaSearch />
                    </button>
                </form>
            </div>
            
            <ul className={classes['navigation-list']}>
                {
                    navigation_data.map(item => (
                        <li key={item.id} className={classes['navigation-item']}>
                            <a 
                                href={item.url} 
                                className={classes['navigation-link']}
                                onClick={ closeMenuHandler }
                            >
                                {item.text}
                            </a>
                        </li>
                    ))
                }
            </ul>

            <div className={classes.copyright}>
                <p>
                    &copy; { new Date().getFullYear() } <span>El Gran Hotel.</span> Todos los derechos reservados
                </p>
            </div>
        </div>
    </nav>
  )
}

export default Navigation
