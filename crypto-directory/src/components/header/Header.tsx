import { NavLink } from 'react-router-dom'

import cLogo from '../../assets/images/cLogo.png'
import './header.css'

const Header = () => {

   return(
      <header className="header-container">
         <nav className="header-content">
            <div className="header-logo-container">
               <NavLink to="/" className="link">
                  <img src={cLogo} alt="logo" className="header-logo" />
               </NavLink>
            </div>
            <div className="header-navs-container">
               {/* Search Icon Goes here */}
               <div className="header-navs-search-container">
                  <NavLink to="/" className="link icon header-navs-search-icon">
                  &#128269;
                  </NavLink>
               </div>
               {/* Humgurger Icon Goes here */}
               <div className="header-navs-hamburger-container">
                  <NavLink to="/" className="link icon header-navs-hamburger-icon">
                     &#9776;
                  </NavLink>
               </div>
            </div>
         </nav>
      </header>
   )
}

export default Header