import { FaAngleDoubleRight } from 'react-icons/fa'
import classes from './About.module.css'
import about_us_1 from '../../assets/about-us-img-1.jpeg'
import about_us_2 from '../../assets/about-us-img-2.jpeg'
import about_us_3 from '../../assets/about-us-img-3.jpeg'
import about_us_4 from '../../assets/about-us-img-4.jpeg'

const About = () => {
  return (
    <section className={classes['about-us']} id='about'>
        <div className={classes['about-us-wrapper']}>
            <div className={classes['about-us-content']}>
                <h1 className={classes['about-us-heading']}>
                    Acerca de Nosotros
                </h1>
                <div className={classes.underline}>
                    <div className={classes['small-underline']}></div>
                    <div className={classes['big-underline']}></div>
                </div>
                <h3 className={classes['sub-heading']}>
                    Hotel El Jaguar Dorado
                </h3>
                <p className={classes['about-us-paragraph']}>
                    Somos un hotel con una larga trayectoria en el sector turístico. 
                    Nuestro objetivo es brindar a nuestros huéspedes una experiencia única
                    e inolvidable. Contamos con una amplia gama de servicios y actividades
                    para que disfrutes al máximo de tu estancia.  
                </p>
                <button className={classes['about-us-btn']}>
                    Leer más
                    <FaAngleDoubleRight />
                </button>
            </div>

            <div className={classes['about-us-images']}>
                <div>
                    <img src={about_us_1} className={`${classes.image} ${classes['image-1']}`} />
                </div>
                <div>
                    <img src={about_us_2} className={`${classes.image} ${classes['image-2']}`} />
                </div>
                <div>
                    <img src={about_us_3} className={`${classes.image} ${classes['image-3']}`} />
                </div>
                <div>
                    <img src={about_us_4} className={`${classes.image} ${classes['image-4']}`} />
                </div>
                
                
            </div>
        </div>
    </section>
  )
}

export default About