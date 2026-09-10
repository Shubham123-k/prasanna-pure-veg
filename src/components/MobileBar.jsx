import { Phone, ShoppingBag } from "lucide-react"
import { restaurant } from "../data"
import ProtectedLink from "./ProtectedLink"

export default function MobileBar() {
  return <div className="mobile-bar"><a href={restaurant.phoneHref}><Phone size={18}/> Call</a><ProtectedLink className="mobile-bar-order" href={restaurant.orderOnline} target="_blank" rel="noreferrer"><ShoppingBag size={18}/> Order Online</ProtectedLink></div>
}
