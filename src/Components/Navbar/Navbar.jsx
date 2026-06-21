import React from "react";
import "./Navbar.css"
import logo from "../../assets/logo.png"
import contact from "../../assets/contact.png" 
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="navbar">
     <img src={logo} alt=""className="logo" /> 
     <div className="desktopmenu">
        <Link to="intro" smooth={true} duration={500} className="desktopmenuListItems">Home</Link>
        <Link to="skills" smooth={true} duration={500} className="desktopmenuListItems">About</Link>
        <Link to="work" smooth={true} duration={500} className="desktopmenuListItems">Portfolio</Link>
        <Link to="contactPage" smooth={true} duration={500} className="desktopmenuListItems">Client</Link>
         

     </div>
     <button className="desktopMenuBtn" onClick={()=>{
      document.getElementById("contact").scrollIntoView();
     }}>
        <img src={contact} alt="" className="desktopMenuTag"/>Contact Me
     </button>
    </div>    
  )
}

export default Navbar
