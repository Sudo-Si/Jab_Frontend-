import React, { useEffect, useState } from 'react'
import simon from '../images/simon.png';
import{ Link} from 'react-router-dom';
import axios from 'axios';
export default function Sidebar() {
  const [cats, setCat] = useState([])
  useEffect(()=>{
    const getCats = async ()=>{
      const res = await axios.get("/categories/");
      setCat(res.data);
    };
    getCats()
},[])
  return (
    <div className='sideBar'>
      <div className="sidebarItem">
    <span className='sideBarTitle'> <Link to='/about'  > About Me</Link></span>   
  
<img className="abtImage" src={simon} alt=""/>    
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis 
    nunc sed id. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. 
    Laoreet non curabitur gravida arcu. Amet massa vitae tortor condimentum. Sapien 
    eget mi proin sed libero enim. Molestie at elementum eu facilisis. Ultricies leo 
    integer malesuada nunc vel risus commodo viverra maecenas. .</p>
      </div>


      <div className="sidebarItem">
         <span className='sideBarTitle'> Catagories</span>   
        
        <ul className='sideBarList'>
          {cats.map((c)=>
          <Link className ="lnk" to={`/?cat=${c.name}`}>
            <li className='sideBarListItem'>  {c.name} </li>
          </Link>
              // 
            )}
            
        </ul>
      </div>
       <div className="sidebarItem">
    <span className='sideBarTitle'> Follow Me</span>   
  <div className='sideBarIcon'>
    <i class="sideBarIcon fab fa-instagram-square"></i>
                <i class="sideBarIcon fab fa-tiktok"></i>
                <i class="sideBarIcon fab fa-linkedin"></i>
                <i class="sideBarIcon fab fa-etsy"></i>
     </div>
      </div>
    </div>
  )
}
