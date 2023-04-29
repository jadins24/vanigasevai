import React from 'react'
import './services.scss';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Services = () => {

    const state = useSelector(({ services }) => services);




  return (
    <div className='services'>
        <div className='services-container'>
            <div className='services-head'>
                <h1>We Provide</h1>
                <h1>Best Quality Services</h1>
            </div>
            <div className='services-cards'>
                {state.servicedata.map((value, index) => {
                    return (
                       
                            <div className='services-padding ' key={index}>
                                <div className='services-card'>
                                    <i class="fa fa-file-archive-o" aria-hidden="true"></i>
                                
                                    <h2>{value.servicename}</h2>
                                    
                                    <h1>{value.price}<span >/ Excl GST</span> </h1>

                                    <p>{value.description}</p>

                                    <div className='btns'>
                                        <a href='#' className='btn'> Contact Now</a>
                                        <a href='#' className=''> Read More<i class="fa fa-arrow-right" aria-hidden="true"></i> </a>
                                        
                                    </div>
                                </div>
                            </div>
                       
                    );
                })}
            </div>


        </div>
    </div>
  )
}

export default Services