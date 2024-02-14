import classes from './Header.module.css'
import { GiGuatemala } from 'react-icons/gi'

const Header = () => {
  return (
    <header className={classes.header} id='home'>

        <div className={classes.brand}>
            <div>
                <GiGuatemala />
            </div>
            <h3 className={classes['hotel-heading']}>
                El Gran Hotel
            </h3>
        </div>

        <div className={classes.banner}>
            <h1 className={classes['banner-heading']}>
                Bienvenido a El Gran Hotel
            </h1>
            <p className={classes['banner-paragraph']}>
                Reserve una habitación y disfrute de nuestras ofertas
            </p>
            <button className={classes['banner-button']}>
                Reserve Ahora 
            </button>
        </div>
    </header>
  )
}

export default Header