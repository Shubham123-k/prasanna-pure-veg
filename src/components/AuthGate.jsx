import { ArrowRight, LockKeyhole, X } from "lucide-react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function AuthGate({ open, onClose, destination, label = "continue" }) {
  const { user } = useAuth()
  if (!open || user) return null

  return (
    <div className="auth-modal-backdrop" role="presentation" onMouseDown={e => e.target === e.currentTarget && onClose()}>
      <div className="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-gate-title">
        <button className="modal-close" onClick={onClose} aria-label="Close"><X size={19}/></button>
        <div className="modal-icon"><LockKeyhole size={20}/></div>
        <div className="eyebrow"><span></span> Member access</div>
        <h2 id="auth-gate-title">Sign in before you {label}.</h2>
        <p>To open ordering on Zomato or Swiggy, please sign in or create your Prasanna account first.</p>
        <div className="auth-modal-actions">
          <Link className="button button-primary" to={`/signin?redirect=${encodeURIComponent(destination || "/")}`} onClick={onClose}>Sign in <ArrowRight size={16}/></Link>
          <Link className="button button-outline" to={`/signup?redirect=${encodeURIComponent(destination || "/")}`} onClick={onClose}>Create account</Link>
        </div>
        <div className="modal-security">Your restaurant ordering account is protected by Firebase Authentication.</div>
      </div>
    </div>
  )
}
