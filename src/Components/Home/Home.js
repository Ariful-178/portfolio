import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./Home.css"
import photo from '../../photo/my-pic-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode, faUserEdit } from '@fortawesome/free-solid-svg-icons';




const Home = () => {






    return (
       <section>
           <div className=" row ">
               
            
                <div className=" div1  col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-3 ">
                    <Sidebar></Sidebar>
                </div>

                <div className="div2 about  col-sm-12 col-md-12 col-lg-8 col-xl-8  col-xxl-9 text-center ">
                    <div  className="infoText" >
                        <img className="image" src={photo} alt="" />
                        <h1 style={{fontFamily:"sans-serif",marginBottom:"15px",fontWeight:"normal"}} >ARIFUL ISLAM</h1>
                        <h3>Software Engineer <FontAwesomeIcon style={{marginLeft:"5px",height:"30px",width:"40px"}} icon={faLaptopCode} /> | Writer <FontAwesomeIcon style={{marginLeft:"5px",height:"30px",width:"40px"}} icon={faUserEdit} /></h3>
                        <p style={{fontSize:"20px"}} >I count myself as a hardworking person.  To pursue a challenging career <br />
                         in a competitive world where enthusiasm, honesty, hard work and <br /> 
                         passion will support me to grow myself as well as utilize <br /> 
                         my knowledge and expertise for professional<br />
                          development in the relevant field. </p>

                    </div>
                    
                    
                </div>

           </div>
           
       </section>
    );
};

export default Home;