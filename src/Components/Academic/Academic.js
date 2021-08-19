import React from 'react';
import Sidebar from './../Sidebar/Sidebar';
import "./Academic.css"

const Academic = () => {
    return (
        <section>
        <div className=" row ">
             <div className=" div1  col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-3">
                 <Sidebar></Sidebar>
             </div>

             <div className=" text-center table1 div2 col-sm-12 col-md-12 col-lg-8 col-xl-8  col-xxl-9">
                 <div   className="table">
                 <table className="table" >
  <tr>
    <th>Degree</th>
    <th>Institute</th> 
    <th>Year</th>
    <th>GPA</th>
  </tr>
  <tr>
    <td>B.sc in CSE</td>
    <td>Daffodill international university</td>
    <td>2016-2021</td>
    <td>2.97(4)</td>
  </tr>
  <tr>
    <td>HSC</td>
    <td>Adamjee Cantonment College</td>
    <td>2013-2015</td>
    <td>5.00</td>
  </tr>
  <tr>
    <td>Dakhil</td>
    <td>Tanjeemul Ummah Cadet Madrasah</td>
    <td>2011-2013</td>
    <td>5.00</td>
  </tr>
  
</table>
                 </div>
                 
             </div>

        </div>
    </section>
    );
};

export default Academic;