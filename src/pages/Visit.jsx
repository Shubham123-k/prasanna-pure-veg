import { ArrowUpRight, Clock3, Instagram, MapPin, Phone, ShoppingBag } from "lucide-react"
import ProtectedLink from "../components/ProtectedLink"
import Reveal from "../components/Reveal"
import { restaurant } from "../data"

export default function Visit() {
  return (
    <div className="page">
      <section className="page-hero visit-hero">
        <div className="container">
          <div className="eyebrow"><span></span> Visit us</div>
          <h1>Find us in<br/><em>Pashan, Pune.</em></h1>
          <p>Drop in for dine-in, takeaway or no-contact delivery. Open daily until 11:30 PM.</p>
        </div>
      </section>

      <section className="section visit-details">
        <div className="container visit-grid">
          <div className="visit-card main-contact">
            <div className="eyebrow"><span></span> The address</div>
            <h2>Prasanna Pure Veg</h2>
            <div className="detail-line"><MapPin size={19}/><span>{restaurant.address}</span></div>
            <div className="detail-line"><span className="plus-code">PLUS CODE</span><span>{restaurant.plusCode}</span></div>
            <div className="visit-buttons">
              <a className="button button-primary" href={restaurant.maps} target="_blank" rel="noreferrer"><MapPin size={17}/> Get Directions</a>
              <a className="button button-outline" href={restaurant.phoneHref}><Phone size={17}/> Call Now</a>
            </div>
          </div>

          <div className="visit-card hours-card">
            <Clock3 size={22}/>
            <div className="eyebrow">Hours</div>
            <h3>Open Daily</h3>
            <p>Until 11:30 PM</p>
          </div>

          <div className="visit-card services-card">
            <ShoppingBag size={22}/>
            <div className="eyebrow">Service options</div>
            <div className="service-tags">
              {restaurant.services.map(s => <span key={s}>{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container map-wrap">
          <div className="map-placeholder">
            <iframe
              title="Google Map showing Prasanna Pure Veg, Pashan Pune"
              src="https://www.google.com/maps?q=Prasanna%20Pure%20Veg%2C%20Pashan%2C%20Pune%2C%20Maharashtra%20411021&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="map-floating-card">
              <div className="map-floating-pin"><MapPin size={18}/></div>
              <div><strong>Prasanna Pure Veg</strong><span>{restaurant.plusCode}</span></div>
              <a href={restaurant.maps} target="_blank" rel="noreferrer" aria-label="Open Prasanna Pure Veg in Google Maps"><ArrowUpRight size={17}/></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section order-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow"><span></span> Order online</div>
            <h2>Choose where you'd like to order.</h2>
          </div>
          <div className="order-grid">
            <ProtectedLink className="order-card" href={restaurant.zomato} target="_blank" rel="noreferrer">
              <div><span className="platform-kicker">PLATFORM</span><h3>Zomato</h3></div><ArrowUpRight/>
            </ProtectedLink>
            <ProtectedLink className="order-card" href={restaurant.swiggy} target="_blank" rel="noreferrer">
              <div><span className="platform-kicker">PLATFORM</span><h3>Swiggy</h3></div><ArrowUpRight/>
            </ProtectedLink>
            <a className="order-card order-card-dark" href={restaurant.instagram} target="_blank" rel="noreferrer">
              <div><span className="platform-kicker">SOCIAL</span><h3>@prasannapure</h3></div><Instagram/>
            </a>
          </div>
        </div>
      </section>

      <section className="visit-final">
        <div className="container">
          <div className="visit-final-card">
            <div>
              <div className="eyebrow light"><span></span> Need a quick answer?</div>
              <h2>Call the restaurant directly.</h2>
            </div>
            <a className="button button-light" href={restaurant.phoneHref}><Phone size={17}/> {restaurant.phone}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
