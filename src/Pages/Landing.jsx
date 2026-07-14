import Nav from "../Components/Landing/Nav"
import Home from "../Components/Landing/Home"
import Feature from "../Components/Landing/Feature"
import Bottom from "../Components/Landing/Bottom"
import Reviews from "../Components/Landing/Reviews"
import Rearny from "../Components/Landing/Rearny"
import Footer from "../Components/Landing/Footer"
const Landing = () => {
    return (
      <div>
        <Nav />
        <Home />
        <Feature />
        <Reviews />
        <Rearny/>
        <Bottom />
        <Footer/>
      </div>
    );
}
export default Landing;