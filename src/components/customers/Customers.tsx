import { ImQuotesLeft } from "react-icons/im";
import Card from "../ui/Card";
import { 
    IoIosArrowDroprightCircle,
    IoIosArrowDropleftCircle 
} from "react-icons/io";

import classes from './Customers.module.css'
import CommonHeader from "../CommonHeader/CommonHeader";


const Customers = () => {
  return (
    <section className={classes.testimonials}>

        <CommonHeader heading="Nuestros Clientes" />

        <div className={`container ${classes.testimonials__container}`}>
            <Card className={classes.testimonial}>
                <div className={classes['testimonial-avatar']}>
                    <img src={""} alt="" />
                </div>
            </Card>
        </div>
    </section>
  )
}

export default Customers