import React from 'react';
import './contact.scss';
import Form from '../form/form.js';
const Contact = () => {


  return (
    <div className='contact'>
        <div className='contact-container'>

            <div className='contact-head'>
              <h1>contact</h1>
            </div>
            <div className='contact-content'>
                <div className='contact-details'>
                  
                  
                      <div class="icon1">
                        <div class="icon">
                          <i class="fa fa-map-marker" ></i>
                          
                        </div>
                        <div class="icon-text">
                          <h5>Location:</h5>
                          <p>1 13.04071° N, 80, Moovendhar Nagar, 13651° E, Iyyappanthangal, Chennai, Tamil Nadu 600056 </p>
                        </div>
                      </div>
                      <div class="icon1">
                        <div class="icon">
                          <i class="fa fa-envelope" ></i>
                          
                        </div>
                        <div class="icon-text">
                          <h5>Email:</h5>
                          <p><a href="mailto:jadinesh04@gmail.com">jadinesh04@gmail.com</a> </p>
                        </div>
                      
                      </div>
                      <div class="icon1">
                        <div class="icon">
                          <i class="fa fa-mobile" ></i>
                          
                        </div>
                        <div class="icon-text">
                          <h5>call:</h5>
                          
                          <a href="tel:+919944515374"> +919944515374 </a>
                        </div>
                    </div>
              
            </div>
                <div className='contact-form'>
                  <Form />
                </div>

            </div>

        </div>
    </div>
  )
}

export default Contact