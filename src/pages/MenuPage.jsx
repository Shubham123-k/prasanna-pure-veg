import { ArrowRight, ArrowUpRight, Coffee, Search, SlidersHorizontal, Utensils, X } from "lucide-react"
import { useMemo, useState } from "react"
import ProtectedLink from "../components/ProtectedLink"
import { restaurant, menu, menuLabels } from "../data"

const foodGroups = Object.keys(menu)

export default function MenuPage() {
  const [tab, setTab] = useState("Food")
  const [search, setSearch] = useState("")

  const visible = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return menu

    return Object.fromEntries(
      Object.entries(menu)
        .map(([group, items]) => [
          group,
          items.filter(item =>
            item.name.toLowerCase().includes(query) ||
            menuLabels[group].toLowerCase().includes(query)
          )
        ])
        .filter(([, items]) => items.length)
    )
  }, [search])

  return (
    <div className="page menu-page">
      <section className="page-hero menu-hero">
        <div className="menu-hero-glow menu-hero-glow-one" />
        <div className="menu-hero-glow menu-hero-glow-two" />
        <div className="container menu-hero-inner">
          <div className="eyebrow light"><span></span> The Prasanna menu</div>
          <h1>Come hungry.<br /><em>Leave happy.</em></h1>
          <p>South Indian favourites, North Indian comfort food, vegetarian Chinese, breads, rice, snacks and more — with the prices from the restaurant's supplied menu.</p>
          <div className="menu-hero-meta">
            <span><Utensils size={15} /> 100% vegetarian</span>
            <span><span className="menu-meta-dot" /> ₹12–₹290</span>
            <span><span className="menu-meta-dot" /> 17 categories</span>
          </div>
        </div>
      </section>

      <section className="menu-shell">
        <div className="container">
          <div className="menu-toolbar menu-toolbar-premium">
            <div className="tabs" role="tablist" aria-label="Menu type">
              <button className={tab === "Food" ? "active" : ""} onClick={() => setTab("Food")} role="tab" aria-selected={tab === "Food"}>
                <Utensils size={16} /> Food <span>17</span>
              </button>
              <button className={tab === "Beverages" ? "active" : ""} onClick={() => setTab("Beverages")} role="tab" aria-selected={tab === "Beverages"}>
                <Coffee size={16} /> Beverages
              </button>
            </div>

            <label className="menu-search menu-search-premium">
              <Search size={17} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search dishes or categories" aria-label="Search dishes or categories" />
              {search && <button type="button" onClick={() => setSearch("")} aria-label="Clear search"><X size={15} /></button>}
            </label>
          </div>

          {tab === "Food" ? (
            <>
              <div className="menu-jump menu-jump-premium">
                <div className="menu-jump-label"><SlidersHorizontal size={14} /> Browse</div>
                {foodGroups.map((group, index) => (
                  <a key={group} href={`#${slug(group)}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>{group}
                  </a>
                ))}
              </div>

              <div className="menu-list">
                {Object.entries(visible).map(([group, items]) => (
                  <section className="menu-section menu-section-premium" id={slug(group)} key={group}>
                    <div className="menu-section-title menu-section-title-premium">
                      <span className="menu-index">{String(foodGroups.indexOf(group) + 1).padStart(2, "0")}</span>
                      <div>
                        <span className="menu-original">{menuLabels[group]}</span>
                        <h2>{group}</h2>
                        <span className="menu-count">{items.length} {items.length === 1 ? "dish" : "dishes"}</span>
                      </div>
                    </div>

                    <div className="menu-items menu-items-premium">
                      {items.map((item, index) => (
                        <article className="menu-item menu-item-premium" key={`${group}-${item.name}`}>
                          <span className="menu-item-number">{String(index + 1).padStart(2, "0")}</span>
                          <div className="menu-item-name">
                            <span>{item.name}</span>
                            <small>Pure vegetarian</small>
                          </div>
                          <span className="menu-item-rule" />
                          <strong className="menu-price">₹{item.price}</strong>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}

                {!Object.keys(visible).length && (
                  <div className="empty-state menu-empty-state">
                    <Search size={24} />
                    <strong>No dishes found</strong>
                    <span>Try another dish name, such as dosa, paneer, rice or soup.</span>
                    <button type="button" onClick={() => setSearch("")}>Show all dishes <ArrowRight size={15} /></button>
                  </div>
                )}
              </div>

              <div className="menu-note menu-note-premium">
                <strong>Menu pricing</strong>
                <span>Prices shown here are transcribed from the supplied menu PDF. Any restaurant-side price update should be reflected here before publishing.</span>
              </div>
            </>
          ) : (
            <section className="beverages-empty beverages-empty-premium">
              <div className="beverage-orbit"><Coffee size={26} /></div>
              <div className="eyebrow"><span></span> Beverages</div>
              <h2>Let's keep this one honest.</h2>
              <p>The supplied 11-page menu contains food sections but does not provide a beverage list, so no drinks have been invented for the website.</p>
              <a className="button button-primary" href={restaurant.phoneHref}>Call to ask <ArrowUpRight size={16} /></a>
            </section>
          )}

          <div className="menu-cta menu-cta-premium">
            <div>
              <span className="eyebrow light"><span></span> Hungry already?</span>
              <h2>See it. Pick it. Order it.</h2>
              <p>Sign in once and continue to your preferred ordering platform.</p>
            </div>
            <div className="menu-cta-actions">
              <ProtectedLink className="button button-primary button-glow" href={restaurant.orderOnline} target="_blank" rel="noreferrer">Order Online <ArrowUpRight size={16} /></ProtectedLink>
              <ProtectedLink className="button button-outline button-outline-light" href={restaurant.swiggy} target="_blank" rel="noreferrer">Open Swiggy <ArrowUpRight size={16} /></ProtectedLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function slug(value) {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}
