import Nav from "../Components/Landing/Nav"
import Home from "../Components/Landing/Home"
import Feature from "../Components/Landing/Feature"
import Bottom from "../Components/Landing/Bottom"
import Reviews from "../Components/Landing/Reviews"
const Landing = () => {
    return (
      <div>
        <Nav />
        <Home />
        <Feature />
        <Reviews />
        <Bottom />
      </div>
    );
}
export default Landing;