import React, { useContext, useState } from 'react'
import logo from "../../assets/logo.png"
import "./Navbar.scss"
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext';
const Navbar = () => {
  const navigate = useNavigate()
  const { search, setSearch, userAthenticate, setShowLoginModel, showLoginModel, setFilter, cart } = useContext(UserContext)

  const [scroll, setScroll] = useState(false)


  let prevScrollPos = window.scrollY;

  window.addEventListener('scroll', function () {
    const currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
      setScroll(true)
    } else {
      setScroll(false)
    }
    prevScrollPos = currentScrollPos;
  });

  return (
    <nav className='navbar'>
      <img src={logo} alt="" onClick={() => navigate("/")} />
      {
        userAthenticate && <div className={scroll?`middle scrolled`:`middle `}>
          <div className="searchbox">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search item..' />
          </div>
          <select className='filter' onChange={(e) => setFilter(e.target.value)}>
            <option value="all">all</option>
            <option value="50">0-50</option>
            <option value="50-500">50-500</option>
            <option value="500">more than 500</option>
          </select>
        </div>
      }

      <div className="links">
        {userAthenticate && <NavLink to="/">Home</NavLink>}
        {userAthenticate && <NavLink className={"cartdiv"} to="/cart">
          <IoCartOutline />
          <span>{cart.length}</span>
        </NavLink>}
        <Link><FaRegUserCircle onClick={() => setShowLoginModel(!showLoginModel)} /></Link>
      </div>
    </nav>
  )
}

export default Navbar
