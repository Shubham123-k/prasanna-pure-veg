import { createContext, useContext, useEffect, useMemo, useState } from "react"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth"
import { auth, firebaseConfigured, googleProvider } from "../firebase"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [authError, setAuthError] = useState("")

  useEffect(() => {
    if (!auth) {
      setLoading(false)
      return undefined
    }
    return onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
  }, [])

  async function signIn(email, password) {
    setAuthError("")
    if (!auth) throw new Error("Firebase is not configured yet. Add the VITE_FIREBASE_* values to .env.local.")
    try {
      return await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      setAuthError(friendlyAuthError(error))
      throw error
    }
  }

  async function signUp(name, email, password) {
    setAuthError("")
    if (!auth) throw new Error("Firebase is not configured yet. Add the VITE_FIREBASE_* values to .env.local.")
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      if (name?.trim()) await updateProfile(result.user, { displayName: name.trim() })
      return result
    } catch (error) {
      setAuthError(friendlyAuthError(error))
      throw error
    }
  }

  async function signInWithGoogle() {
    setAuthError("")
    if (!auth || !googleProvider) throw new Error("Firebase is not configured yet. Add the VITE_FIREBASE_* values to .env.local.")
    try {
      return await signInWithPopup(auth, googleProvider)
    } catch (error) {
      setAuthError(friendlyAuthError(error))
      throw error
    }
  }

  async function logout() {
    if (auth) await signOut(auth)
  }

  const value = useMemo(() => ({ user, loading, firebaseConfigured, authError, signIn, signUp, signInWithGoogle, logout, clearAuthError: () => setAuthError("") }), [user, loading, authError])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function friendlyAuthError(error) {
  const code = error?.code || ""
  const map = {
    "auth/invalid-credential": "The email or password is incorrect.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/email-already-in-use": "An account already exists with this email.",
    "auth/weak-password": "Use a stronger password with at least 6 characters.",
    "auth/popup-closed-by-user": "The Google sign-in window was closed.",
    "auth/popup-blocked": "Your browser blocked the Google sign-in popup. Allow popups and try again.",
    "auth/network-request-failed": "Network error. Check your connection and try again.",
  }
  return map[code] || error?.message || "Something went wrong. Please try again."
}

export function useAuth() {
  const value = useContext(AuthContext)
  if (!value) throw new Error("useAuth must be used inside AuthProvider")
  return value
}
