import {  Outlet } from "react-router-dom";
// import Products from "./Products";
// import About from './About'
import StyledNavbar from "./StyledNavbar";
const  Home =()=>
{
    return (
        <> 
        <StyledNavbar />
        <Outlet/>
         </>
    )
}
export default Home;