import { useState } from "react"
import AuthGate from "./AuthGate"
import { useAuth } from "../context/AuthContext"

export default function ProtectedLink({ href, children, className = "", ...props }) {
  const { user } = useAuth()
  const [open, setOpen] = useState(false)

  function handleClick(e) {
    if (!user) {
      e.preventDefault()
      setOpen(true)
    }
  }

  return (
    <>
      <a href={href} className={className} onClick={handleClick} {...props}>{children}</a>
      <AuthGate open={open} onClose={() => setOpen(false)} destination={href} />
    </>
  )
}
