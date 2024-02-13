import { social_data } from "../../utils/data"
import classes from './Sidebar.module.css'

const Sidebar = (
    {
        handleToggleSidebar,
        openSidebar,
    }:{
        handleToggleSidebar: () => void
        openSidebar: boolean
    }
) => {
  return (
    <div className={classes['sidebar-wrapper']}>
        <div className={classes.sidebar}>

            <div className={`${classes['menu-icon']} ${openSidebar ? classes['navigation-toggle'] : undefined}`} onClick={handleToggleSidebar}>
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
                    &copy; { new Date().getFullYear() } <span>El Gran Hotel</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar