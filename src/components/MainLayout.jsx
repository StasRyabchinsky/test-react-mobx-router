import { Link,NavLink, Outlet } from "react-router-dom";
import headerProfileImg from "../assets/img/headerProfileImg.png"
import { observer } from "mobx-react";
import { useRootStore } from "../store/root-store-provider";

let setActiveLink = ({isActive}) => isActive ? "mainNavbarLink active-link" : "mainNavbarLink"

const Layout = observer(() =>{
  const {singInStore} = useRootStore();

  const logout = () => {
    singInStore.logout()
  }
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
          {
            (!(singInStore.userData.id ) && (
              <Link to="/auth" className="headerButton">
                  Sing in
              </Link>)) 
            || 
            (singInStore.userData.id && (
            <Link className="headerButton" onClick={logout}>
              Logout
            </Link>))
          }
        </div>
      </header>
      <main>
        <nav className="mainNavbar">
          <NavLink to="/home" className={setActiveLink}>Home</NavLink>
          <NavLink to="/about" className={setActiveLink}>About</NavLink>
          <NavLink to="/contact" className={setActiveLink}>Contact us</NavLink>
        </nav>
        <Outlet />
      </main>
    </>
    )
})

export {Layout}
