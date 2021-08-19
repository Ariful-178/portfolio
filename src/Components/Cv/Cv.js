import React from 'react';
import Sidebar from './../Sidebar/Sidebar';
import './Cv.css'

const Cv = () => {
    return (
        <section>
        <div className=" row  ">
             <div className=" div1  col-sm-12 col-md-12 col-lg-4 col-xl-3 col-xxl-3 ">
                 <Sidebar></Sidebar>
             </div>

             <div className=" div2 col-sm-12 col-md-12 col-lg-8 col-xl-9  col-xxl-9 ">
             
             <button  className="btnn" > <a href="https://drive.google.com/file/d/1E0w1OAaCIRe777Mq1DDI9YpnHzclDSRV/view?usp=sharing">Download</a></button>
             </div>

        </div>
    </section>
    );
};

export default Cv;