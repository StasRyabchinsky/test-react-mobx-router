import { Link,NavLink, Outlet } from "react-router-dom";
import headerProfileImg from "../assets/img/headerProfileImg.png"

let setActiveLink = ({isActive}) => isActive ? "mainNavbarLink active-link" : "mainNavbarLink"
const Layout = () =>{

    return(
        <>
      <header>
        <Link to="/profile" className="headerProfile">
            <img src={headerProfileImg} alt="profile" className="headerProfileImg"/>
        </Link>
        <form action="">
            <input type="search" className="headerSearchInput"/>
        </form>
        <div className="headerButtonContainer">
            <Link to="/auth" className="headerButton">
                Sing in
            </Link>
        </div>
        
      </header>
      <main>
        <nav className="mainNavbar">
          <NavLink to="/home" className={setActiveLink}>Home</NavLink>
          {/* <NavLink to="/posts" className={setActiveLink}>Posts</NavLink> */}
          <NavLink to="/about" className={setActiveLink}>About</NavLink>
          <NavLink to="/contact" className={setActiveLink}>Contact us</NavLink>

        </nav>
        
        <Outlet />
        
      </main>
    </>
    )
}
export {Layout}
