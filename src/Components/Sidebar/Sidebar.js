import React,{useRef,useEffect} from 'react';

import { NavLink } from 'react-router-dom';
import Music from '../Music/Music';
import "./Slidebar.css"

const activeStyle={

        background:" linear-gradient(to right, #353353, #4ca2cb)",
        borderRadius:"7px",
        paddingTop:"10px",
        height:"101%", 
        color: "#b9acbf"
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