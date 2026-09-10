import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import MobileBar from "./components/MobileBar"

import Home from "./pages/Home"
import MenuPage from "./pages/MenuPage"
import About from "./pages/About"
import Visit from "./pages/Visit"
import Auth from "./pages/Auth"

import { AuthProvider } from "./context/AuthContext"

import "./styles.css"
import "./premium.css"

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileBar />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AuthProvider>
        <Routes>
          <Route path="/signin" element={<Auth mode="signin" />} />
          <Route path="/signup" element={<Auth mode="signup" />} />

          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          <Route
            path="/menu"
            element={
              <Layout>
                <MenuPage />
              </Layout>
            }
          />

          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          <Route
            path="/visit"
            element={
              <Layout>
                <Visit />
              </Layout>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
