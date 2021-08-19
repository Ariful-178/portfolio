import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Slidebar.css"

const activeStyle={

        backgroundColor:"#A7E2DB",
        borderRadius:"10px",
        paddingTop:"9px",
        height:"100%", 
        color: "red"
      }

const Sidebar = () => {
    return (
      
        
        <div className=" sidebar col-sm-12 col-lg-12   " >

          <p className="logo">ARIFUL ISLAM</p>
              <ul>
          <li >
            <NavLink activeStyle={activeStyle}  to="/home">ABOUT</NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/academic">ACADEMIC</NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/skils">SKILS</NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/projects">PROJECTS</NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle}  to="/experience">EXPERIENCE</NavLink>
          </li>
          
          <li>
            <NavLink activeStyle={activeStyle} to="/trainingsCertifications">TRAININGS</NavLink>
          </li>
          <li>
            <NavLink  activeStyle={activeStyle} to="/linkProfile">LINKS</NavLink>
          </li>
          <li>
            <NavLink  activeStyle={activeStyle} to="/cv"><span style={{color:"RED",fontSize:"17px"}} >CV</span></NavLink>
          </li>
         
          <li>
            <NavLink activeStyle={activeStyle}  to="/contacts">CONTACT</NavLink>
          </li>
          
          
          
          
        </ul>
        </div>
        
      
    );
};

export default Sidebar;