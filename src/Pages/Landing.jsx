import { useState } from "react"
import Nav from "../Components/Landing/Nav"
import Home from "../Components/Landing/Home"
import Feature from "../Components/Landing/Feature"
import Bottom from "../Components/Landing/Bottom"
import Reviews from "../Components/Landing/Reviews"
import Rearny from "../Components/Landing/Rearny"
import Footer from "../Components/Landing/Footer"
import Login from "./Login"
const Landing = () => {
  const [showLogin,setShowLogin] =useState(false)
    return (
      <div className="pt-[79px]">
        <Nav onLogin={() => setShowLogin(true)} />
        <Home />
        <Feature />
        <Reviews />
        <Rearny />
        <Bottom />
        <Footer />
        {showLogin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <Login onClose={() => setShowLogin(false)} />
          </div>
        )}
      </div>
    );
}
export default Landing;