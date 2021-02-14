import React from 'react';
import {NavLink} from 'react-router-dom'

const Common = (props)=>{

    return (
       <>
       <section id="header h-100">
       <div className="container-fluid">
           <div className="row">
               <div className="col-10  mx-auto">
                   <div className="row">
                       <div className="pt-5 col-md-6 my-auto order-1 order-lg-0">
                            <h1 className="display-5 mt-4">{props.name}
                            <strong className="text-primary"> Hamsaraj</strong></h1>  
                            <h3  className=" mt-4">we make Digital World</h3>
                            <div className="mt-4">
                            <NavLink to={props.visit} className="btn mt-4 btn-outline-primary">
                            {props.btnname}
                              </NavLink>
                            </div>
                       </div>
                       <div className="d-flex align-items-center justify-content-end py-3 col-md-6 order-2 order-lg-1">
                            <img src={props.imgsrc} className="img-fluid" alt="gal img"/>
                       </div>
                   </div>
               </div>
           </div>
       </div>

       </section>
       </>
    )

}

export default Common;