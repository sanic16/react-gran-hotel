import { rooms_data } from '../../utils/data'

import CommonHeader from '../CommonHeader/CommonHeader'
import Room from './Room'

import classes from './Rooms.module.css'


const Rooms = () => {
  return (
    <section className={classes.rooms} id='rooms'>
        <div className={classes['rooms-content-wrapper']}>        
           <CommonHeader heading='Nuestras Habitaciones' />

            <div className={classes['rooms-cards-wrapper']}>

                { rooms_data.map(room => (
                    <Room
                        key={room.id}
                        room={room}
                    /> 
                ))}

                


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