import { ArrowUpRight, ChevronDown, LogOut, Menu as MenuIcon, UserRound, X } from "lucide-react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import { restaurant } from "../data"
import ProtectedLink from "./ProtectedLink"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const location = useLocation()
  const { user, logout } = useAuth()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [location.pathname])

  useEffect(() => {
    setOpen(false)
    setAccountOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onKeyDown = event => {
      if (event.key === "Escape") {
        setOpen(false)
        setAccountOpen(false)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const links = [["/", "Home"], ["/menu", "Menu"], ["/about", "About Us"], ["/visit", "Visit Us"]]
  const solid = !isHome || scrolled || open

  return (
    <header className={`site-header ${solid ? "header-solid" : "header-transparent"} ${open ? "header-open" : ""}`}>
      <div className="container nav-wrap nav-wrap-premium">
        <Link className="brand brand-premium" to="/" aria-label="Prasanna Pure Veg home">
          <span className="brand-mark"><span>P</span></span>
          <span className="brand-copy"><strong>Prasanna</strong><small>PURE VEG · PASHAN</small></span>
        </Link>

        <nav className={`desktop-nav desktop-nav-premium ${open ? "mobile-open" : ""}`} aria-label="Main navigation">
          <div className="nav-links">
            {links.map(([href, label]) => (
              <NavLink key={href} to={href} end={href === "/"}>{label}</NavLink>
            ))}
          </div>

          <ProtectedLink className="nav-order nav-order-premium" href={restaurant.orderOnline} target="_blank" rel="noreferrer">
            <span>Order Online</span><ArrowUpRight size={16} />
          </ProtectedLink>

          <div className="mobile-auth">
            {user ? (
              <>
                <span className="signed-user"><UserRound size={15} /> {user.displayName || user.email}</span>
                <button onClick={logout}><LogOut size={15} /> Sign out</button>
              </>
            ) : (
              <>
                <Link to="/signin">Sign in</Link>
                <Link to="/signup" className="small-filled">Create account</Link>
              </>
            )}
          </div>
        </nav>

        <div className="nav-actions nav-actions-premium">
          {user ? (
            <div className="account-wrap">
              <button className="account-chip" onClick={() => setAccountOpen(value => !value)} aria-expanded={accountOpen} aria-label="Open account menu">
                <span className="account-avatar"><UserRound size={15} /></span>
                <span className="account-name">{user.displayName || "Account"}</span>
                <ChevronDown size={14} className={accountOpen ? "rotated" : ""} />
              </button>
              {accountOpen && (
                <div className="account-popover">
                  <span className="account-popover-label">Signed in as</span>
                  <strong>{user.displayName || "Prasanna guest"}</strong>
                  <small>{user.email}</small>
                  <button onClick={logout}><LogOut size={15} /> Sign out</button>
                </div>
              )}
            </div>
          ) : (
            <Link className="auth-link auth-link-premium" to="/signin">
              <span className="auth-link-icon"><UserRound size={14} /></span>
              <span>Sign in</span>
            </Link>
          )}

          <button className="menu-toggle menu-toggle-premium" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(value => !value)}>
            {open ? <X size={21} /> : <MenuIcon size={21} />}
          </button>
        </div>
      </div>
    </header>
  )
}
