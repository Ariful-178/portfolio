import React from 'react';
import Sidebar from './../Sidebar/Sidebar';
import './LinkProfile.css'

const LinkProfile = () => {
    return (
        <section>
        <div className=" row ">
             <div className=" div1 col-sm-12 col-md-12 col-lg-4 col-xl-3 col-xxl-3">
                 <Sidebar></Sidebar>
             </div>

             <div className="  div2 col-sm-12 col-md-12 col-lg-8 col-xl-9  col-xxl-9">
                 <div className="linkbtn">

                 <button className="buttonlink" ><a href="https://www.linkedin.com/in/mais-715/">Linkedin</a></button>
                <button className="buttonlink" > <a href="https://github.com/Ariful-178">Github</a></button>
                <button className="buttonlink" > <a href="https://www.facebook.com/profile.php?id=100059586523376">Facebook</a></button>
                 </div>
               
                 
             </div>

        </div>
    </section>
    );
};

export default LinkProfile;<h1>Link&profile</h1>