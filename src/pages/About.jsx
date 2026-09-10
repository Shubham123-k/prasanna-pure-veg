import { ArrowRight, Check, Leaf, Users, Utensils, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { restaurant } from "../data"

const values = [
  [Leaf, "100% Vegetarian", "Every item on this site reflects the restaurant's pure-veg positioning."],
  [Sparkles, "Fresh Daily", "Everyday food, prepared for the people who come in every day."],
  [Utensils, "South Indian Roots", "A menu led by dosa, idli, wada and familiar South Indian favourites."],
  [Users, "Community Favourite", "4.1★ from 5,717 ratings gives a clear measure of local trust."]
]

export default function About() {
  return (
    <div className="page">
      <section className="page-hero about-hero">
        <div className="container">
          <div className="eyebrow"><span></span> About Prasanna</div>
          <h1>Familiar food.<br/><em>A trusted address.</em></h1>
          <p>Prasanna Pure Veg is a neighborhood restaurant in Pashan, Pune, focused on 100% vegetarian food and the consistency people expect from an everyday local favourite.</p>
        </div>
      </section>

      <section className="section">
        <div className="container story-grid">
          <div className="story-image">
            <img src="/images/restaurant-front.jpg" alt="Prasanna Pure Veg restaurant exterior" />
          </div>
          <div className="story-copy">
            <div className="eyebrow"><span></span> Our approach</div>
            <h2>Keep it simple. Keep it vegetarian.</h2>
            <p className="large-copy">The restaurant's identity is straightforward: South Indian roots, a broad vegetarian menu, and a place that works for everyday meals in Pashan.</p>
            <p>There is no invented origin story here. The strongest story is the one customers have already written through repeated visits and thousands of ratings.</p>
            <div className="rating-large"><strong>{restaurant.rating}</strong><span>★</span><small>{restaurant.ratingsCount} ratings</small></div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow"><span></span> What matters</div>
            <h2>Four simple principles.</h2>
          </div>
          <div className="values-grid">
            {values.map(([Icon, title, copy], i) => (
              <div className="value-card" key={title}>
                <div className="value-num">0{i+1}</div>
                <Icon size={23} strokeWidth={1.6}/>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow"><span></span> Around the restaurant</div>
              <h2>Real food. Real place.</h2>
            </div>
            <a className="text-link" href={restaurant.instagram} target="_blank" rel="noreferrer">See more on Instagram <ArrowRight size={16}/></a>
          </div>
          <div className="about-gallery">
            <img src="/images/idli-sambar.jpg" alt="Idli sambar" />
            <img src="/images/special-masala-dosa.jpg" alt="Special masala dosa" />
            <img src="/images/north-indian-thali.jpg" alt="North Indian thali" />
            <img src="/images/dahi-misal-pav.jpg" alt="Dahi misal pav" />
          </div>
        </div>
      </section>

      <section className="final-cta compact">
        <div className="container final-cta-inner">
          <div>
            <p className="eyebrow">Next</p>
            <h2>See what's on the menu.</h2>
          </div>
          <Link className="button button-primary" to="/menu">Explore Our Menu <ArrowRight size={17}/></Link>
        </div>
      </section>
    </div>
  )
}
