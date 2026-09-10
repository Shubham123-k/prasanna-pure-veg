import { ArrowUpRight, Clock3, Instagram, MapPin, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import { restaurant } from "../data"
import ProtectedLink from "./ProtectedLink"

export default function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div><div className="footer-brand">Prasanna Pure Veg</div><div className="devanagari">{restaurant.marathi}</div><p className="footer-note">Pure vegetarian South Indian food, served simply and consistently in Pashan, Pune.</p></div>
      <div className="footer-block"><h4>Visit</h4><a href={restaurant.maps} target="_blank" rel="noreferrer"><MapPin size={16}/> Get directions</a><a href={restaurant.phoneHref}><Phone size={16}/> {restaurant.phone}</a><span><Clock3 size={16}/> {restaurant.hours}</span></div>
      <div className="footer-block"><h4>Explore</h4><Link to="/menu">Menu</Link><Link to="/about">About Us</Link><Link to="/visit">Visit Us</Link><a href={restaurant.instagram} target="_blank" rel="noreferrer"><Instagram size={16}/> Instagram</a></div>
      <div className="footer-block"><h4>Order</h4><ProtectedLink href={restaurant.zomato} target="_blank" rel="noreferrer">Zomato <ArrowUpRight size={15}/></ProtectedLink><ProtectedLink href={restaurant.swiggy} target="_blank" rel="noreferrer">Swiggy <ArrowUpRight size={15}/></ProtectedLink><ProtectedLink href={restaurant.orderOnline} target="_blank" rel="noreferrer">Order Online <ArrowUpRight size={15}/></ProtectedLink></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Prasanna Pure Veg</span><span>100% Pure Vegetarian</span></div>
  </footer>
}
