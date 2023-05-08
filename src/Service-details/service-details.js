import React, { useEffect, useState } from "react";
import './service-details.scss';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const ServiceDetails = () => {

    const state = useSelector(({services}) => services);
console.log(state);
    const params=useParams();
    console.log(params);
    
    const [detail,showDetail]=useState(state.servicedata[params.index])
    console.log(detail);
    useEffect(()=>{
      showDetail(state.servicedata[params.index])
  },[params])
   
  return (
    <div className="service-details">
      <div className="service-details-container">

        <h2>{detail.servicename}</h2>
        <h1>{detail.price}</h1>
        <p>{detail.sddescription1}</p>
        <p>{detail.sddescription2}</p>
      
      
      </div>
    </div>
   
                                    
  )
}

export default ServiceDetails