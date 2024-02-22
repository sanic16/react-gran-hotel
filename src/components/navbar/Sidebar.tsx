import useMenuContext from "../../context/menu-context"
import { social_data } from "../../utils/data"
import Navigation from "./Navigation"
import classes from './Sidebar.module.css'


const Sidebar = () => {
  const { isMenuOpen, toggleMenuHandler } = useMenuContext()  
  return (
    
    <nav>
        <div className={classes.sidebar}>

            <div className={`${classes['menu-icon']} ${isMenuOpen ? classes['navigation-toggle'] : undefined}`} onClick={toggleMenuHandler}>
                <div className={`${classes['line']} ${classes['line-1']}`}></div>
                <div className={`${classes['line']} ${classes['line-2']}`}></div>
                <div className={`${classes['line']} ${classes['line-3']}`}></div>
            </div>
            
            <ul className={classes['social-icons-list']}>
                {
                    social_data.map(item => (
                        <li key={item.id}>
                            <a 
                                href={item.url} 
                                className={classes['social-link']}
                            >
                                <item.icon />
                            </a>
                        </li>
                    ))
                }
            </ul>

            <div className={classes['year']}>
                <p>
                    { new Date().getFullYear() } 
                </p>
            </div>

            
        </div>
        <Navigation />
    </nav>
  )
}

export default Sidebar