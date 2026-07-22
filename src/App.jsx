import {Routes,Route} from 'react-router-dom';
import Landing from './Pages/Landing';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
function App() {
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home/>} />
      </Routes>
    );
}
export default App;