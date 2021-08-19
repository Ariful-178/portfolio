import React from 'react';
import Sidebar from './../Sidebar/Sidebar';
import './TrainingCertifications.css'

const TrainingCertifications = () => {
    return (
        <section>
           <div className=" row  ">
                <div className=" div1  col-sm-12 col-md-12 col-lg-4 col-xl-3 col-xxl-3 ">
                    <Sidebar></Sidebar>
                </div>

                <div className="trainings  div2 col-sm-12 col-md-12 col-lg-8 col-xl-9  col-xxl-9 ">
                    <div className="training training1" >
                        <h2>Responsive Web Design</h2>
                        <h3>Organization: Coderstrust Bangladesh  </h3>
                        <h4>Year: 2018</h4>
                        <h5>Duration: 6 month </h5>
                    </div>
                    <div className="training  training2" >
                        <h2>Complete Web Development Course With Jhankar Mahbub</h2>
                        <h3>Organization: Programming Hero  </h3>
                        <h4>Year: 2021</h4>
                        <h5>Duration: 6 month </h5>

                    </div>
                    <div className="training  training2" >
                        <h2>IELTS</h2>
                        <h3>Organization: Chancellor International  </h3>
                        <h4>Year: 2016</h4>
                        <h5>Duration: 3 month </h5>
                        <h6>Band Score: 6.5 </h6>

                    </div>
    
                    
                </div>

           </div>
       </section>
    );
};

export default TrainingCertifications;