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

export { 
    social_data,
    navigation_data
}