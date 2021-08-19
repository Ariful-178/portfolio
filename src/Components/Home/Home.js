import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./Home.css"
import photo from '../../photo/my-pic-1.jpg'

const Home = () => {
    return (
       <section>
           <div className=" row ">
                <div className=" div1  col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-3 ">
                    <Sidebar></Sidebar>
                </div>

                <div className="div2   col-sm-12 col-md-12 col-lg-8 col-xl-8  col-xxl-9 text-center ">
                    <div >
                        <img className="image" src={photo} alt="" />

                    </div>
                    <div className="infoText">
                        <h1>ARIFUL ISLAM</h1>
                        <h3>Software Engineer | Writer</h3>
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