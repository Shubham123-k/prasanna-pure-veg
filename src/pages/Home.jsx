import { ArrowRight, ArrowUpRight, Check, Clock3, MapPin, Star } from "lucide-react"
import { Link } from "react-router-dom"
import { restaurant, categoryImages, featuredDishes } from "../data"
import ProtectedLink from "../components/ProtectedLink"
import Reveal from "../components/Reveal"

const highlights = [
  ["South Indian Breakfast", "Dosa, idli, wada and everyday breakfast favourites."],
  ["Combos & Thali", "South Indian and North Indian thali options."],
  ["Indian Breads", "Roti, naan, kulcha and paratha choices."],
  ["Chinese Corner", "Vegetarian Chinese favourites, rice and noodles."],
  ["Rice & Biryani", "Pulav, biryani, khichadi and comfort rice dishes."],
  ["Pav Bhaji", "Classic pav bhaji with several variations."]
]

const gallery = [
  "/images/special-masala-dosa.jpg",
  "/images/idli-sambar.jpg",
  "/images/dahi-misal-pav.jpg",
  "/images/south-indian-thali.jpg",
  "/images/north-indian-thali.jpg"
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image" aria-hidden="true"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="eyebrow light"><span></span> Pashan · Pune</div>
          <p className="hero-marathi">{restaurant.marathi}</p>
          <h1>Prasanna<br/><em>Pure Veg</em></h1>
          <p className="hero-lead">Pure vegetarian South Indian food, made with the everyday comfort Pune comes back for.</p>

          <div className="rating-row">
            <span className="rating-badge"><Star size={15} fill="currentColor"/> {restaurant.rating}</span>
            <span>{restaurant.ratingsCount} ratings</span>
            <span className="dot">·</span>
            <span>100% Pure Vegetarian</span>
          </div>

          <div className="hero-actions">
            <Link className="button button-primary" to="/menu">View Menu <ArrowRight size={17}/></Link>
            <ProtectedLink className="button button-ghost" href={restaurant.orderOnline} target="_blank" rel="noreferrer">Order Online <ArrowUpRight size={17}/></ProtectedLink>
          </div>
        </div>
        <div className="hero-scroll">Scroll to explore <span></span></div>
      </section>

      <Reveal><section className="trust-strip">
        <div className="container trust-grid">
          <div><strong>4.1★</strong><span>5,717 ratings</span></div>
          <div><strong>100%</strong><span>Pure vegetarian</span></div>
          <div><strong>Dine-in</strong><span>Takeaway · Delivery</span></div>
          <div><strong>₹200–400</strong><span>Per person</span></div>
        </div>
      </section></Reveal>

      <Reveal><section className="section intro-section">
        <div className="container split-intro">
          <div>
            <div className="eyebrow"><span></span> A familiar table in Pashan</div>
            <h2>Good food, without the fuss.</h2>
          </div>
          <div>
            <p className="large-copy">Prasanna Pure Veg is a neighborhood South Indian restaurant in Pashan, Pune, built around a simple promise: keep the food vegetarian, dependable and worth returning for.</p>
            <p>From a quick breakfast to a full thali, the menu stays broad enough for everyday meals and group tables alike.</p>
            <Link className="text-link" to="/about">Learn more <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section></Reveal>

      <Reveal><section className="section warm-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow"><span></span> From the menu</div>
              <h2>What are you in the mood for?</h2>
            </div>
            <Link className="text-link desktop-only" to="/menu">See full menu <ArrowRight size={16}/></Link>
          </div>
          <div className="category-grid">
            {highlights.map(([title, copy], index) => (
              <Link className="category-card" key={title} to={`/menu#${title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}>
                <img src={categoryImages[title] || "/images/popular-dish.jpg"} alt={title} loading="lazy" />
                <div className="category-shade"></div>
                <div className="category-content">
                  <span className="category-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <span className="category-arrow"><ArrowUpRight size={18}/></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section></Reveal>

      <Reveal><section className="section picks-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow"><span></span> A few favourites</div>
              <h2>Worth making room for.</h2>
            </div>
            <Link className="text-link desktop-only" to="/menu">Browse every dish <ArrowRight size={16}/></Link>
          </div>

          <div className="picks-grid">
            {featuredDishes.map((dish, index) => (
              <Link className="pick-card" key={dish.name} to={`/menu#${dish.category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}>
                <div className="pick-image-wrap">
                  <img src={dish.image} alt={dish.name} loading="lazy" />
                  <span className="pick-number">0{index + 1}</span>
                  <span className="pick-price">₹{dish.price}</span>
                </div>
                <div className="pick-copy">
                  <div>
                    <span>{dish.category}</span>
                    <h3>{dish.name}</h3>
                  </div>
                  <span className="pick-arrow"><ArrowUpRight size={16}/></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section></Reveal>

      <Reveal><section className="section proof-section">
        <div className="container proof-grid">
          <div className="proof-photo">
            <img src="/images/restaurant-interior.jpg" alt="Prasanna Pure Veg restaurant interior" loading="lazy" />
          </div>
          <div className="proof-copy">
            <div className="eyebrow"><span></span> Why people return</div>
            <h2>A local favourite, measured in trust.</h2>
            <p className="large-copy">The clearest proof is the community itself: 4.1 stars from 5,717 ratings, with 1,145+ people reporting visits.</p>
            <div className="proof-list">
              {["100% pure vegetarian", "Open daily until 11:30 PM", "Dine-in, takeaway and no-contact delivery"].map(item => (
                <div key={item}><Check size={17}/> {item}</div>
              ))}
            </div>
          </div>
        </div>
      </section></Reveal>

      <Reveal><section className="section instagram-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow"><span></span> On the table</div>
              <h2>Follow <span className="accent">@prasannapure</span></h2>
            </div>
            <a className="button button-outline desktop-only" href={restaurant.instagram} target="_blank" rel="noreferrer">Follow on Instagram <ArrowUpRight size={16}/></a>
          </div>
          <div className="photo-mosaic">
            {gallery.map((src, i) => <img key={src} src={src} alt="Prasanna Pure Veg food" loading="lazy" className={`mosaic-${i+1}`} />)}
          </div>
          <a className="button button-outline mobile-full" href={restaurant.instagram} target="_blank" rel="noreferrer">Follow on Instagram <ArrowUpRight size={16}/></a>
        </div>
      </section></Reveal>

      <Reveal><section className="visit-band">
        <div className="container visit-band-inner">
          <div>
            <div className="eyebrow light"><span></span> Find us</div>
            <h2>Come by for a proper meal.</h2>
            <p>{restaurant.address}</p>
          </div>
          <div className="visit-actions">
            <a className="button button-light" href={restaurant.maps} target="_blank" rel="noreferrer"><MapPin size={17}/> Get Directions</a>
            <a className="button button-dark" href={restaurant.phoneHref}><Clock3 size={17}/> Call Now</a>
          </div>
        </div>
      </section></Reveal>

      <Reveal><section className="final-cta">
        <div className="container final-cta-inner">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2>Choose your table.<br/><em>We'll handle the food.</em></h2>
          </div>
          <div className="final-actions">
            <Link className="button button-primary" to="/menu">View Menu <ArrowRight size={17}/></Link>
            <ProtectedLink className="button button-outline" href={restaurant.orderOnline} target="_blank" rel="noreferrer">Order Online <ArrowUpRight size={17}/></ProtectedLink>
          </div>
        </div>
      </section></Reveal>
    </>
  )
}
