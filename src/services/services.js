import React from 'react'
import './services.scss';
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

const Services = () => {

    const state = useSelector(({ services }) => services);
    const navigate = useNavigate();
    const goToDetails = (index) => {
        console.log("sf" + index);
        navigate("/Service-details/"  + index);
      };
    
     

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
                                    <i class= {value.icon}  aria-hidden="true"></i>
                                
                                    <h1 className='servicename'>{value.servicename}</h1>
                                    
                                    <h1>{value.price}<span >/ Excl GST</span> </h1>

                                    <p>{value.description}</p>

                                    <div className='btns'>
                                        <a href='tel:+919342616702' className='btn'> Contact Now</a>
                                        <a href='/#'  onClick={() => goToDetails(index)}   > Read More<i class="fa fa-arrow-right" aria-hidden="true"></i> </a>
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