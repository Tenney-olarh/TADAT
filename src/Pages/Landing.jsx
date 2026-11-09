import { useState } from "react"
import Nav from "../Components/Landing/Nav"
import Home from "../Components/Landing/Home"
import Feature from "../Components/Landing/Feature"
import Bottom from "../Components/Landing/Bottom"
import Reviews from "../Components/Landing/Reviews"
import Rearny from "../Components/Landing/Rearny"
import Footer from "../Components/Landing/Footer"
import Login from "./Login"
import Signup from "./Signup"
const Landing = () => {
  const [showLogin,setShowLogin] =useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const openLogin=()=>{
    setShowLogin(true)
    setShowSignup(false)
  }
  const openSignUp =()=>{
    setShowSignup(true)
    setShowLogin(false)
  }
    return (
      <div className="pt-[79px]">
        <Nav
          onLogin={() => {
            setShowSignup(false)
            setShowLogin(true)
          }}
          onSignup={() => {
            setShowLogin(false)
            setShowSignup(true)
          }}
        />
        <Home
          onSignup={() => {
            setShowLogin(false)
            setShowSignup(true)
          }}
        />
        <Feature />
        <Reviews />
        <Rearny />
        <Bottom />
        <Footer />
        {showLogin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <Login onClose={() => setShowLogin(false)}
              onSignUp={openSignUp} />
          </div>
        )}
        {showSignup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <Signup onClose={() => setShowSignup(false)}
              onLogin={openLogin} />
          </div>
        )}

      </div>
    );
}
export default Landing;