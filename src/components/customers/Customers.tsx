import Card from "../ui/Card";
import { 
    IoIosArrowDroprightCircle,
    IoIosArrowDropleftCircle 
} from "react-icons/io";

import classes from './Customers.module.css'
import CommonHeader from "../CommonHeader/CommonHeader";
import { customers } from "../../utils/data";
import { useState } from "react";


const Customers = () => {
  const [index, setIndex] = useState(0)
  const { name, avatar, job, quote } = customers[index]  

  const prevTestimonialHandler = () => {
    setIndex((index - 1 + customers.length) % customers.length)
  }

  const nextTestimonialHandler = () => {
    setIndex((index + 1) % customers.length)
  }

  return (
    <section className={classes.testimonials} id="customers">


        <div className={`container ${classes.testimonials__container}`}>

            <CommonHeader heading="Nuestros Clientes" />

            
            <Card className={classes.testimonial}>
                <div className={classes['testimonial__avatar']}>
                    <img src={avatar} alt={name} />
                </div>
                <p className={classes['testimonial__quote']}>
                    {`"${quote}"`}
                </p>
                <h5 className={classes['testimonial__name']}>
                    { name }
                </h5>
                <small className={classes['testimonial__title']}>
                    { job }
                </small>
            </Card>

            <div className={classes['testimonials__btn-container']}>
                <button
                    className={classes['testimonials__btn']}
                    onClick={prevTestimonialHandler}
                >
                    <IoIosArrowDropleftCircle />
                </button>
                <button
                    className={classes['testimonials__btn']}
                    onClick={nextTestimonialHandler}
                >   
                    <IoIosArrowDroprightCircle />
                </button>
            </div>

        </div>
    </section>
  )
}

export default Customers