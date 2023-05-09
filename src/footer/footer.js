import React from "react";
import './footer.scss'

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-container">
            <div className="footer-card res-w">
                     <img src={require('../assets/img/logo1.png')} alt='no image'/>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                    <h4>Get Social With Us</h4>
                    <div className="footer-icons">
                        <div className="footer-icon facebook">
                            <i className="fa fa-facebook"></i>
                        </div>
                        <div className="footer-icon pinterest">
                            <i className="fa fa-pinterest-p"></i>
                        </div>
                        <div className="footer-icon twitter">
                            <i className="fa fa-twitter"></i>
                        </div>
                        <div className="footer-icon instagram">
                            <i className="fa fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div className="quick-links res-w">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href='/about'>About Us</a></li>
                        <li><a href='/services'>Services</a></li>
                        <li><a href='/pricing'>Pricing</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                </div>
                <div className="usefull-links res-w">
                    <h4>Useful Links</h4>
                    <ul>    
                        <li><a href='/Privacy policy'>Privacy Policy</a></li>
                        <li><a href='/terms and conditions'>Terms and Conditions</a></li>
                        <li><a href='/refund policy'>Refund Policy</a></li>
                        <li><a href=''>Support</a></li>
                        <li><a href=''>FAQ</a></li>
                    </ul>
                </div>
                <div className="address res-w">
                    <h3>Address</h3>
                     <a href="#"> <i class="fa fa-map-marker" aria-hidden="true"></i>No.22, S-2, 2nd Floor, Victory Riya Apartment, Manikandan Nagar, Kundrathur, Chennai - 600069.</a>
                     <a href="mailto:vanigasevai@gmail.com"><i class="fa fa-envelope-o" aria-hidden="true"></i>vanigasevai@gmail.com</a>
                     <a href="tel:+919342616702"><i class="fa fa-phone" aria-hidden="true"></i>+91 9342616702</a>

                </div>
                
            </div>
        </div>

        
    );
}

export default Footer;  