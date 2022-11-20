import headerimg from '../images/headerimg.png'
const  Header =()=>
{
    return (
        <div className="header">
    
        <div className="headerTitles">

        <span className="headerTitleSm">Just Another Blog </span>
        <span className="headerTitleLg">JAB </span>
        </div>
        <img src={headerimg} alt=""/>
        </div>
        )
}
export default Header;