import React from 'react';
import Sidebar from './../Sidebar/Sidebar';
import wImage from '../../photo/whats-app-q-code.JPG'
import './Contacts.css'
import { faFacebook, faWhatsapp, faSkype } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'


const Contacts = () => {
    return (
        <section>
        <div className=" row ">
             <div className=" div1          col-sm-12 col-md-12 col-lg-4 col-xl-3 col-xxl-3">
                 <Sidebar></Sidebar>
             </div>

             <div className=" contacts div2 col-sm-12 col-md-12 col-lg-8 col-xl-9  col-xxl-9">
                 <ul>
                     <li><FontAwesomeIcon style={{marginLeft:"5px",height:"20px",width:"30px"}} icon={faEnvelope} /> <span className="cspan cspan2"> ariful.islam.cs.178@gmail.com</span></li>
                     <li><FontAwesomeIcon style={{marginLeft:"5px",height:"20px",width:"30px"}} icon={faPhone} /> <span className="cspan cspan2">0088 01521330869</span> </li>
                     <li><FontAwesomeIcon style={{marginLeft:"5px",height:"20px",width:"30px"}} icon={faPhone} /> <span className="cspan cspan2">0088 01707565696</span></li>
                     <li><FontAwesomeIcon style={{marginLeft:"5px",height:"20px",width:"30px"}} icon={faWhatsapp} /><span className="cspan cspan2" >0088 01521330869</span> <br /> <img   className="wimage" src={wImage} alt="" /></li>
                     <li><FontAwesomeIcon style={{marginLeft:"5px",height:"20px",width:"30px"}} icon={faFacebook} /> <a href="https://www.facebook.com/profile.php?id=100059586523376">Click Me</a> </li>
                     <li><FontAwesomeIcon style={{marginLeft:"5px",height:"20px",width:"30px"}} icon={faSkype} />  <span className="cspan">mais715</span> <span style={{marginLeft:"9px",fontSize:"25px"}}> Or</span> <span className="cspan cspan2">0088 01521330869</span> </li>
                     
                     
                 </ul>
                 
             </div>

        </div>
    </section>
    );
};

export default Contacts;