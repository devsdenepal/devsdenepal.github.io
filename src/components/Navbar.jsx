import logo from '/assets/logo.png';
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { RiMenuFill } from "react-icons/ri";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from 'react-router-dom';

function NavBar() {
  const [sticky, setSticky] = useState(false);
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setSticky(window.scrollY > 10);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const NavList = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "About",
      slug: "/about",
    },
     {
      name: "Tech Stack",
      slug: "/tech-stack",
    },
    {
      name: "Projects",
      slug: "/projects",
    },
    
    // {
    //   name: "Contact",
    //   slug: "/contact",
    // },
    
  ];

  return (
    <>
      <nav className={`navbarWrapper`} data-aos="fade-down">
        {/* <Container> */}
          <div className="navbar">
            <div className="navbar-menu">
              <span onClick={handleShow}>
                {" "}
                <RiMenuFill />{" "}
              </span>
            </div>
            <div className="navbar-logo">
              <Link to="/">
              <img src={logo} alt="Logo" loading='lazy' />
              </Link>
            </div>
            <ul className="navbar-list">
              {NavList.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.slug}
                    className={({ isActive }) =>
                      isActive ? "navbar-list-item active" : "navbar-list-item"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            </div>
        {/* </Container> */}
      </nav>
    </>
  );
}

export default NavBar;