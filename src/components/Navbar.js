import { Link } from "react-router-dom";
import Products from "./Products";
import Home from "./Home";
import About from './About'
const  Navbar =()=>
{
    return (
        <div className="navbar">
        <h1>Simon Maswabi</h1>
        <div className="links">
           <Link to='/' className="lnk" element={<Home/>}>Home</Link>
           <Link to='/products' className="lnk" element={<Products/>}>Products</Link>
           <Link to='/about' className="lnk" element={<About/>}>About</Link>
        </div>
        </div>
        )
}
export default Navbar;