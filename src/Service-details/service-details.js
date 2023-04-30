import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const ServiceDetails = () => {

    const state = useSelector(({ services }) => services);

    const params=useParams();
    
    const [detail,changeDetail]=useState(state[params.key][params.index])
    useEffect(()=>{
        changeDetail(state[params.key][params.index])
    },[state[params.key],params])

  return (
    <div>
        <h2>{detail.servicename}</h2>
    </div>
   
                                    
  )
}

export default ServiceDetails