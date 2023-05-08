import React from 'react';
import './contact.scss';
import Form from '../form/form.js';
const Contact = () => {


  return (
    <div className='contact'>
        <div className='contact-container'>

            <div className='contact-head'>
              <h1>CONTACT</h1>
            </div>
            <div className='contact-content'>
                <div className='contact-details'>
                  
                  
                      <div class="icon1">
                        <div class="icon">
                          <i class="fa fa-map-marker" ></i>
                          
                        </div>
                        <div class="icon-text">
                          <h5>Location:</h5>
                          <p><a href='https://goo.gl/maps/NMYiwxbmLCWM14HE8'>1 13.04071° N, 80, Moovendhar Nagar, 13651° E, Iyyappanthangal, Chennai, Tamil Nadu 600056 </a> </p>
                        </div>
                      </div>
                      <div class="icon1">
                        <div class="icon">
                          <i class="fa fa-envelope" ></i>
                          
                        </div>
                        <div class="icon-text">
                          <h5>Email:</h5>
                          <p><a href="mailto:vanigasevai@gmail.com">vanigasevai@gmail.com</a> </p>
                        </div>
                      
                      </div>
                      <div class="icon1">
                        <div class="icon">
                          <i class="fa fa-mobile" ></i>
                          
                        </div>
                        <div class="icon-text">
                          <h5>call:</h5>
                          
                          <a href="tel:+91 8144414507"> +91 8144414507 </a>
                        </div>
                    </div>
              
            </div>
                <div className='contact-form'>
                  <Form />
                </div>

            </div>
            <div className='map'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6728.5362902691195!2d80.13543763304831!3d13.041004557090554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526108b953ea71%3A0xe8620328c7f9c75e!2sVanigasevai!5e0!3m2!1sen!2sin!4v1683003328712!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    </div>
  )
}

export default Contact