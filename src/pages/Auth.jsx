import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck, Sparkles, UserRound } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"

const benefits = [
  "One-tap access to online ordering",
  "Email or Google sign-in",
  "A simple, secure checkout hand-off"
]

export default function Auth({ mode }) {
  const isSignup = mode === "signup"
  const navigate = useNavigate()
  const location = useLocation()
  const { signIn, signUp, signInWithGoogle, authError, clearAuthError, firebaseConfigured } = useAuth()
  const redirect = new URLSearchParams(location.search).get("redirect") || "/"
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [busy, setBusy] = useState(false)
  const [localError, setLocalError] = useState("")

  async function submit(event) {
    event.preventDefault()
    setBusy(true)
    setLocalError("")
    clearAuthError()

    try {
      if (isSignup) await signUp(form.name, form.email, form.password)
      else await signIn(form.email, form.password)
      goToRedirect()
    } catch (error) {
      setLocalError(error?.message || "Unable to complete authentication.")
    } finally {
      setBusy(false)
    }
  }

  function goToRedirect() {
    if (/^https?:\/\//i.test(redirect)) window.location.assign(redirect)
    else navigate(redirect)
  }

  async function google() {
    setBusy(true)
    setLocalError("")
    clearAuthError()

    try {
      await signInWithGoogle()
      goToRedirect()
    } catch (error) {
      setLocalError(error?.message || "Google sign-in failed.")
    } finally {
      setBusy(false)
    }
  }

  const switchPath = isSignup ? "/signin" : "/signup"

  return (
    <div className="auth-page auth-page-premium">
      <div className="auth-visual auth-visual-premium">
        <img src="/images/special-masala-dosa.jpg" alt="Special masala dosa at Prasanna Pure Veg" />
        <div className="auth-visual-overlay"></div>
        <div className="auth-orb auth-orb-one" />
        <div className="auth-orb auth-orb-two" />

        <Link className="auth-brand auth-brand-premium" to="/">
          <span className="brand-mark"><span>P</span></span>
          <span><strong>Prasanna</strong><small>PURE VEG · PASHAN</small></span>
        </Link>

        <div className="auth-visual-content">
          <span className="auth-kicker"><Sparkles size={14} /> Made for easy ordering</span>
          <h1>Good food,<br /><em>one tap away.</em></h1>
          <p>Save your access once and get straight back to the food you came for.</p>
          <div className="auth-benefits">
            {benefits.map(item => <span key={item}><Check size={14} /> {item}</span>)}
          </div>
        </div>

        <div className="auth-visual-footer">
          <span>100% pure vegetarian</span>
          <span>·</span>
          <span>Pashan, Pune</span>
        </div>
      </div>

      <div className="auth-panel auth-panel-premium">
        <div className="auth-top auth-top-premium">
          <Link to="/" className="auth-back"><ArrowLeft size={15} /> Back to website</Link>
          <span>{isSignup ? "Already a member?" : "New here?"} <Link to={switchPath}>{isSignup ? "Sign in" : "Create account"}</Link></span>
        </div>

        <div className="auth-form-wrap auth-form-wrap-premium">
          <div className="auth-mobile-brand"><span className="brand-mark"><span>P</span></span> Prasanna</div>
          <div className="eyebrow"><span></span> {isSignup ? "Create your account" : "Welcome back"}</div>
          <h2>{isSignup ? <>Make ordering<br /><em>effortless.</em></> : <>Welcome back<br /><em>to Prasanna.</em></>}</h2>
          <p className="auth-sub">{isSignup ? "Create your account and keep your next order just a sign-in away." : "Sign in once and continue to your preferred ordering platform."}</p>

          <button className="google-button google-button-premium" onClick={google} disabled={busy}>
            <span className="google-logo">G</span>
            <span>{busy ? "Connecting…" : "Continue with Google"}</span>
            <ArrowRight size={15} />
          </button>

          <div className="auth-divider"><span>or use email</span></div>

          <form onSubmit={submit}>
            {isSignup && (
              <label className="field field-premium">
                <span>Name</span>
                <div><UserRound size={17} /><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" autoComplete="name" /></div>
              </label>
            )}

            <label className="field field-premium">
              <span>Email</span>
              <div><Mail size={17} /><input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" autoComplete="email" /></div>
            </label>

            <label className="field field-premium">
              <span>Password</span>
              <div>
                <LockKeyhole size={17} />
                <input required minLength="6" type={showPassword ? "text" : "password"} value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="••••••••" autoComplete={isSignup ? "new-password" : "current-password"} />
                <button type="button" className="password-toggle" onClick={() => setShowPassword(value => !value)} aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </label>

            {!isSignup && <div className="forgot"><span>Forgot password?</span> Reset flow can be enabled by the site administrator.</div>}

            <button className="button button-primary auth-submit auth-submit-premium" type="submit" disabled={busy}>
              <span>{busy ? "Please wait…" : isSignup ? "Create my account" : "Sign in"}</span>
              <span className="submit-arrow"><ArrowRight size={17} /></span>
            </button>
          </form>

          {(authError || localError) && <div className="auth-error auth-error-premium">{authError || localError}</div>}

          {!firebaseConfigured && (
            <div className="config-notice"><strong>Firebase setup required</strong><br />Add the VITE_FIREBASE_* values from Firebase Console to <code>.env.local</code> before using authentication.</div>
          )}

          <div className="auth-trust-row">
            <span><ShieldCheck size={14} /> Firebase secured</span>
            <span><LockKeyhole size={13} /> Your password stays private</span>
          </div>

          <p className="auth-disclaimer">By continuing, you agree to use Prasanna's website and ordering links responsibly.</p>
        </div>
      </div>
    </div>
  )
}
