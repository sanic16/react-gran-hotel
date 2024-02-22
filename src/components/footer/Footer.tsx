import classes from './Footer.module.css'

import { footer_contact, footer_images, footer_navigation } from '../../utils/data'

const Footer = () => {
  return (
    <footer className={classes.footer} id='contact'>
        <div className={classes['main-part']}>

            <div className={classes['footer-list-wrapper']}>
                <h3 className={classes['footer-heading']}>
                    El Gran Hotel
                </h3>
                <ul className={classes['footer-list']}>
                    {
                        footer_contact.map(item => (
                            <li className={classes['footer-list-item']} key={item.id}>
                                <a href="#" className={classes['footer-list-link']}>
                                    {item.data}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className={classes['footer-list-wrapper']}>
                <h3 className={classes['footer-heading']}>
                    Explorar
                </h3>
                <ul className={classes['footer-list']}>
                {
                        footer_navigation.map(item => (
                            <li className={classes['footer-list-item']} key={item.id}>
                                <a href={item.url} className={classes['footer-list-link']}>
                                    {item.text}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className={classes.contact}>
                <h3 className={classes['footer-heading']}>
                    Contacto
                </h3>
                <p>
                    Registrese para recibir ofertas especiales
                </p>
                <form className={classes['footer-form']}>
                    <input type="text" className={classes['footer-input']} placeholder='Ingresa tu Email' />
                    <button className={classes['footer-btn']}>
                        Registrarse
                    </button>
                </form>              
            </div>

            <div className={classes.gallery}>
                <h3 className={classes['footer-heading']}>
                    Galería
                </h3>
                <div className={classes['gallery-images']}>
                    {
                        footer_images.map(item => (
                            <div className={classes['image-wrapper']}>
                                <img src={item.image} alt={item.image} className={classes['footer-image']} />
                            </div>
                        ))
                    }
                </div>
            </div>

            
        </div>
        
        <div className={classes['creator-part']} >
            <div className={classes['copyright-text']}>
                <p>
                    &copy; { new Date().getUTCFullYear() } El Gran Hotel. Todos los derechos reservados. 
                </p>
            </div>
            <div className={classes['text-right']}>
                <p>
                    Creado por: <i><a href='https://juliosanic.'>
                        Julio Sanic
                    </a>
                    </i>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer