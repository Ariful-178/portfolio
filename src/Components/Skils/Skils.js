import React from 'react';
import ReactDOM from 'react-dom'
import Sidebar from './../Sidebar/Sidebar';
import './Skils.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faGithub, faHtml5, faJs, faNode, faReact, faSass } from '@fortawesome/free-brands-svg-icons'




const Skils = () => {
    return (
        <section>
        <div className=" row ">
             <div className=" div1 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-3">
                 <Sidebar></Sidebar>
             </div>

             <div className=" skils div2 col-sm-12 col-md-12 col-lg-8 col-xl-8  col-xxl-9 ">
                 <div className="skilss">
                     <ul>
                     <li>HTML <FontAwesomeIcon style={{marginLeft:"5px",height:"20px",width:"30px"}} icon={faHtml5} /></li>
                     <li>CSS <FontAwesomeIcon style={{marginLeft:"5px",height:"20px",width:"30px"}} icon={faCss3} /> </li>
                     <li>BOOTSTRAP <FontAwesomeIcon style={{marginLeft:"5px",height:"20px",width:"30px"}} icon={faBootstrap} /></li>
                     <li>SASS <FontAwesomeIcon style={{marginLeft:"5px",height:"20px",width:"30px"}} icon={faSass} /></li>
                     <li>RESPONSIVE</li>
                     <li>MATERIAL-UI</li>
                     <li>PSD TO HTML</li>
                     <li>JAVASCRIPT <FontAwesomeIcon style={{marginLeft:"5px",height:"20px",width:"30px"}} icon={faJs} /></li>
                     <li>REACT JS <FontAwesomeIcon style={{marginLeft:"5px",height:"20px",width:"30px"}} icon={faReact} /> </li>
                     <li>NEXT JS</li>
                     <li>FIREBASE AUTH</li>
                     <li>EXPRESS JS</li>
                     <li>NODE JS <FontAwesomeIcon style={{marginLeft:"5px",height:"20px",width:"30px"}} icon={faNode} /> </li>
                     <li>CURD </li>
                     <li>MONGO DB</li>
                     <li>REACT NATIVE</li>
                     <li> <span >Git & Github</span>   <FontAwesomeIcon style={{marginLeft:"5px",height:"20px",width:"30px"}} icon={faGithub} /> </li>
                     </ul>
                     

                 </div>
                


                
                
                 
             </div>

        </div>
    </section>
    );
};

export default Skils;<h1>Skils</h1>