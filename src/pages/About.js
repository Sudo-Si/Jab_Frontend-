import { Link } from "react-router-dom";
import Home from './Home'
const  About =()=>
{
    return (
        <div>
            <h1>About Me</h1>
           
     
        <div className="rtn-hme">
       <p>  <Link to='/' className="btn" element={<Home/>}> Return  Home</Link>
         </p>
        
        </div>
           </div>
        )
}
export default About;
