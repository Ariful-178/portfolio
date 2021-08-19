import React from 'react';
import Sidebar from './../Sidebar/Sidebar';
import "./Experience.css"

const Experience = () => {
    return (
        <section>
        <div className=" row ">
             <div className=" div1 col-sm-12 col-md-12 col-lg-4 col-xl-3 col-xxl-3">
                 <Sidebar></Sidebar>
             </div>

             <div className="experienceMain div2 col-sm-12 col-md-12 col-lg-8 col-xl-9  col-xxl-9">
                 <div className="experience">
                     <h4>Freelance Marketplace </h4>
                     <h5>Duration: 2018-2019</h5>
                     <h6>Position or Responsibility: Web Designer</h6>

                 </div>
                 
             </div>

        </div>
    </section>
    );
};

export default Experience;<h1>Experience</h1>