import React from 'react';
import Sidebar from './../Sidebar/Sidebar';
import './LinkProfile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const LinkProfile = () => {
    return (
        <section>
        <div className=" row ">
             <div className=" div1 col-sm-12 col-md-12 col-lg-4 col-xl-3 col-xxl-3">
                 <Sidebar></Sidebar>
             </div>

             <div className="  div2 col-sm-12 col-md-12 col-lg-8 col-xl-9  col-xxl-9">
                 <div className="linkbtn">

                 <button className="buttonlink" ><a href="https://www.linkedin.com/in/mais-715/">Linkedin <FontAwesomeIcon style={{marginLeft:"5px",height:"25px",width:"30px"}} icon={faLinkedin} /></a></button>
                <button className="buttonlink" > <a href="https://github.com/Ariful-178">Github <FontAwesomeIcon style={{marginLeft:"5px",height:"25px",width:"30px"}} icon={faGithub} /></a></button>
                <button className="buttonlink" > <a href="https://www.facebook.com/profile.php?id=100059586523376">Facebook <FontAwesomeIcon style={{marginLeft:"5px",height:"25px",width:"30px"}} icon={faFacebook} /></a></button>
                 </div>
               
                 
             </div>

        </div>
    </section>
    );
};

export default LinkProfile;<h1>Link&profile</h1>