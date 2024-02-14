import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGooglePlusG } from "react-icons/fa"


const social_data = [
    {
        id: 1,
        icon: FaFacebook,
        url: "https://www.facebook.com"
    },
    {
        id: 2,
        icon: FaTwitter,
        url: "https://www.twitter.com" 
    },
    {
        id: 3,
        icon: FaInstagram,
        url: "https://www.instagram.com"
    },
    {
        id: 4,
        icon: FaGooglePlusG,
        url: "https://www.google.com"
    }
]

const navigation_data = [
    {
        id: 1,
        text: "Inicio",
        url: "#home"
    },
    {
        id: 2,
        text: "Acerca",
        url: "#about"
    },
    {
        id: 3,
        text: "Habitaciones",
        url: "#rooms"
    },
    {
        id: 4,
        text: "Events",
        url: "#events"
    },
    {
        id: 5,
        text: "Customers",
        url: "#customers"
    },
    {
        id: 6,
        text: "Contact",
        url: "#contact"
    }

]

import singleRoom from '../assets/single-room.jpeg'
import doubleRoom from '../assets/double-room.jpeg'
import lux from '../assets/lux.jpeg'
import vip from '../assets/vip.jpeg'

const rooms_data = [
    {
        id: 1,
        image: singleRoom,
        title: 'Habitación Individual',
        description: 'Disfruta de una habitación individual con todas las comodidades.', 
        price: 799.00
    },
    {
        id: 2,
        image: doubleRoom,
        title: 'Habitación Doble',
        description: 'Disfruta de una habitación doble con todas las comodidades.',
        price: 999.00
    },
    {
        id: 3,
        image: lux,
        title: 'Habitación Premium',
        description: 'Disfruta de una habitación premium con todas las comodidades.',
        price: 1499.00
    },
    {
        id: 4,
        image: vip,
        title: 'Habitación VIP',
        description: 'Disfruta de una habitación VIP con todas las comodidades.',
        price: 1999.00
    }
]

export { 
    social_data,
    navigation_data,
    rooms_data
}