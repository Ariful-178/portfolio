import React from 'react';
import Sidebar from './../Sidebar/Sidebar';
import './Projects.css'

const Projects = () => {
    return (
        <section>
        <div className=" row  ">
             <div className=" div1 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-3 ">
                 <Sidebar></Sidebar>
             </div>

             <div className=" proj div2 col-sm-12 col-md-12 col-lg-8 col-xl-8  col-xxl-9 ">
                 
                 <div className="projects projects1" >
                     <h3> <span style={{color:"gray",marginRight:"5px"}} >NAME:</span> Booking Flights</h3>
                     <h5><span style={{color:"gray",marginRight:"5px"}} >OVERVIEW:</span> This is a simple booking flight page using HTML,CSS and JavaScript . </h5>
                      <h5><span style={{color:"gray",marginRight:"5px"}} >DURATION:</span> 2 days</h5>   
                      <h5><a href="https://github.com/Ariful-178/a4-ticket">Github</a> 
                      & <a href="https://ariful-178.github.io/a4-ticket/">LIVE</a></h5> 

                 </div>
                 <div className="projects projects1" >
                     <h3><span style={{color:"gray",marginRight:"5px"}} >NAME:</span>Simple E-Commerce</h3>
                     <h5><span style={{color:"gray",marginRight:"5px"}}>  </span>OVERVIEW: Simple E-Commerce with react js
                         </h5>
                      <h5><span style={{color:"gray",marginRight:"5px"}} >DURATION:</span> 10 days</h5>   
                      <h5><a href="https://github.com/Ariful-178/ema">github</a> 
                      </h5> 

                 </div>
                 <div className="projects projects1" >
                     <h3><span style={{color:"gray",marginRight:"5px"}} >NAME:</span>Online Metro Ticket Counter</h3>
                     <h5><span style={{color:"gray",marginRight:"5px"}} >OVERVIEW:</span> This is a ticket counter using react , firebase authentication etc  </h5>
                      <h5><span style={{color:"gray",marginRight:"5px"}} >DURATION:</span> 2 days</h5>   
                      <h5><a href="https://github.com/Ariful-178/ticket-1">github</a> 
                      & <a href="https://brave-kilby-5ef62a.netlify.app/">LIVE</a></h5> 

                 </div>
                
                
             </div>

        </div>
    </section>
    );
};

export default Projects;<h1>Projects</h1>