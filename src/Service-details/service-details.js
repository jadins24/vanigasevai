import React, { useEffect, useState } from "react";
import './service-details.scss';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Form from "../form/form";
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


  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxrR-LdaOPmpWPVuKk3rdUxgnyUu0LlaaWFqm9DR4HPkZPNcBPvB7uVGm9bawcbVuvl/exec",
     
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
   
  return (
    <div className="service-details">
      <div className="service-details-container">
        <div className="service-details-content1" >
          <div className="details1">
            <div className="details-border">
              <h2>{detail.servicename}</h2>
              <p>{detail.sddescription1}</p>
              <p>{detail.sddescription2}</p>
            </div>
          </div>
          <div className="details2">
            <div className="price">
              <div className="price-border">
                <h2>{detail.price}</h2>
                <p> Market Price :<s> {detail.mprice}</s></p>
                <p> Incl of GST  : {detail.gst}</p>
                <p> Save         : {detail.save}</p>

              </div>
            </div>

            <div className="formdiv">
              <div className="forms">
                <form className="form " onSubmit={(e) => Submit(e)}>
                  <input placeholder="Your Name" name="Name" type="text" />
                  <input placeholder="Your Phone" name="Phone" type="tel" />
                  <input placeholder="Your Email" name="Email" type="text" />
                  <input name="Name" type="submit" value={"SUBMIT"} className="btn" />
                </form>
                <p>99.9% customer satisfaction is guaranteed.</p>
                <p>No hidden charges</p>
              </div>

            </div>

          </div>
        </div>
        <div className="service-details-content2" >
          <div className="details1">
            <h1>{detail.q1}</h1>
            <p>{detail.p1}</p>
            <h1>{detail.q2}</h1>
            <p>{detail.p2}</p>
          </div>
        </div>
        
      
      
      </div>
    </div>
   
                                    
  )
}

export default ServiceDetails