
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    HamburgerIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    Navigation,
    NavBtnLink,
    anch
 } from './Navbar.elements'
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [homeClick, setHomeClick] = useState(false);

    const handleHomeClick = () => {
        setHomeClick(true);
    }
   
    const handleClick = () =>  setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // so if the screensize is <= 960px then set button state to false
        if(window.innerwidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'> 
                            <b>ALZBRAIN</b>
                    </NavLogo>
                    {/* <HamburgerIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </HamburgerIcon> */}
                    <NavMenu onClick={handleClick} click={click} >
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            <NavLinks to='/' onClick={closeMobileMenu}>
                                HOME
                            </NavLinks>
                        </NavItem>
                        <NavItem  onClick={handleHomeClick} homeClick={homeClick}>
                        
                            <a style={{color:'#333'}} href="#features">
                                FEATURES
                                </a>
                                
                                
                        
                        </NavItem>
                        <NavItem  onClick={handleHomeClick} homeClick={homeClick}>
                            
                            <a style={{color:'#333'}} href='#about'>
                            ABOUT
                            </a>
                            

                            
                        </NavItem>
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            
                            <a style={{color:'#333'}} href="#portfolio">
                                GALLERY
                                </a>
                                
                                
                        </NavItem> 
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                           
                            <a  style={{color:'#333'}} href="#testimonials" >
                            TESTIMONIALS
                            </a>
                            
                            
                        </NavItem>
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            
                            <a style={{color:'#333'}} href="#team">
                            TEAM
                            </a>
                           
                        </NavItem>

                        <NavItemBtn >
                            {button ? (
                                <NavBtnLink to='/sign-up'>
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/sign-up'>
                                    <Button onClick={closeMobileMenu} fontBig primary>SIGN Up</Button>
                                </NavBtnLink>
                            )}
                            
                        </NavItemBtn>
                        <NavItemBtn >
                            {button ? (
                                <NavBtnLink to='/sign-in'>
                                    <Button primary>Sign IN</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/sign-in'>
                                    <Button onClick={closeMobileMenu} fontBig primary>Sign In</Button>
                                </NavBtnLink>
                            )}
                            
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    )
}

export default Navbar


// import React from "react";
// //import { Link, /*useNavigate*/ } from "react-router-dom";
// import "./Navbarstyles.css"

// const Navbar = (props) => {
//   return (
//     <nav id="menu" className="navbar navbar-default navbar-fixed-top">
//       <div className="container">
//         <div className="navbar-header">
//           <button
//             type="button"
//             className="navbar-toggle collapsed"
//             data-toggle="collapse"
//             data-target="#bs-example-navbar-collapse-1"
//           >
//             {" "}
//             <span className="sr-only">Toggle navigation</span>{" "}
//             <span className="icon-bar"></span>{" "}
//             <span className="icon-bar"></span>{" "}
//             <span className="icon-bar"></span>{" "}
//           </button>
//           <a className="navbar-brand page-scroll" href="#page-top">
//             AlzBrain
//           </a>{" "}
//         </div>

//         <div
//           className="collapse navbar-collapse"
//           id="bs-example-navbar-collapse-1"
//         >
//           <ul className="nav navbar-nav navbar-right">
//             <li>
              
//               <a href="#features" className="page-scroll">
//                 Features
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="page-scroll">
//                 About
//               </a>
//             </li>
//             {/* <li>
//               <a href="#services" className="page-scroll">
//                 Services
//               </a>
//             </li> */}
//             <li>
//               <a href="#portfolio" className="page-scroll">
//                 Gallery
//               </a>
//             </li>
//             <li>
//               <a href="#testimonials" className="page-scroll">
//                 Testimonials
//               </a>
//             </li>
//             <li>
//               <a href="#team" className="page-scroll">
//                 Team
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar