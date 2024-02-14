import { FaAngleDoubleRight } from 'react-icons/fa'
import classes from './Rooms.module.css'

const Room = (
    {
        room
    }:{
        room: {
            id: number,
            title: string,
            image: string,
            description: string,
            price: number
        }
    }
) => {
  return (
    <div className={classes['room-card']}>
        <div className={classes['room-img']}>
            <img src={room.image} alt="Habitación Simple" />
        </div>
        <div className={classes['room-card-content']}>
            <h4 className={classes['room-card-heading']}>
                {room.title}
            </h4>
            <p className={classes['room-card-paragraph']}>
                {room.description}
            </p>
            <p className={classes['room-price']}>
                Q{room.price}
            </p>
            <button className={classes['room-card-btn']}>
                Reservar Ahora <FaAngleDoubleRight />
            </button>
        </div>
    </div>
  )
}

export default Room