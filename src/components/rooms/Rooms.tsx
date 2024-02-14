import classes from './Rooms.module.css'
import singleRoom from '../../assets/single-room.jpeg'
import doubleRoom from '../../assets/double-room.jpeg'
import lux from '../../assets/lux.jpeg'
import vip from '../../assets/vip.jpeg'

import { FaAngleDoubleRight } from 'react-icons/fa'


const Rooms = () => {
  return (
    <section className={classes.rooms}>
        <div className={classes['rooms-content-wrapper']}>        
            <div className={classes['common-header']}>
                <h1 className={classes['common-heading']}>
                    Nuestras Habitaciones
                </h1>
                <div className={classes.underline}>
                    <div className={classes['small-underline']}></div>
                    <div className={classes['big-underline']}></div>
                </div>
            </div>

            <div className={classes['rooms-cards-wrapper']}>

                <div className={classes['room-card']}>
                    <div className={classes['room-img']}>
                        <img src={singleRoom} alt="Habitación Simple" />
                    </div>
                    <div className={classes['room-card-content']}>
                        <h4 className={classes['room-card-heading']}>
                            Habitación Individual
                        </h4>
                        <p className={classes['room-card-paragraph']}>
                            Disfruta de una habitación individual con todas las comodidades.
                        </p>
                        <p className={classes['room-price']}>
                            $99.00
                        </p>
                        <button className={classes['room-card-btn']}>
                            Reservar Ahora <FaAngleDoubleRight />
                        </button>
                    </div>
                </div>

                <div className={classes['room-card']}>
                    <div className={classes['room-img']}>
                        <img src={doubleRoom} alt="Habitación Doble" />
                    </div>
                    <div className={classes['room-card-content']}>
                        <h4 className={classes['room-card-heading']}>
                            Habitación Doble
                        </h4>
                        <p className={classes['room-card-paragraph']}>
                            Disfruta de una habitación doble con todas las comodidades.
                        </p>
                        <p className={classes['room-price']}>
                            $199.00
                        </p>
                        <button className={classes['room-card-btn']}>
                            Reservar Ahora <FaAngleDoubleRight />
                        </button>
                    </div>
                </div>

                <div className={classes['room-card']}>
                    <div className={classes['room-img']}>
                        <img src={lux} alt="Habitación Premium" />
                    </div>
                    <div className={classes['room-card-content']}>
                        <h4 className={classes['room-card-heading']}>
                            Habitación Premium
                        </h4>
                        <p className={classes['room-card-paragraph']}>
                            Reserva una habitación premium y descubre el lujo en su máxima expresión. 
                        </p>
                        <p className={classes['room-price']}>
                            $299.00
                        </p>
                        <button className={classes['room-card-btn']}>
                            Reservar Ahora <FaAngleDoubleRight />
                        </button>
                    </div>
                </div>

                <div className={classes['room-card']}>
                    <div className={classes['room-img']}>
                        <img src={vip} alt="Habitación VIP" />
                    </div>
                    <div className={classes['room-card-content']}>
                        <h4 className={classes['room-card-heading']}>
                            Habitación Individual
                        </h4>
                        <p className={classes['room-card-paragraph']}>
                            Disfruta de una habitación individual con todas las comodidades.
                        </p>
                        <p className={classes['room-price']}>
                            $99.00
                        </p>
                        <button className={classes['room-card-btn']}>
                            Reservar Ahora <FaAngleDoubleRight />
                        </button>
                    </div>
                </div>


            </div>

            <div className={classes['rooms-btn-wrapper']}>
                <button className={classes['rooms-btn']}>
                    Ver Más Habitaciones
                </button>
            </div>
        </div>
    </section>
  )
}

export default Rooms