import React from 'react'
import './about.scss';


const About = () => {
  return (
    <div className="about">
      <div className='about-container'>
        <div className='about-head'>
          <h1>ABOUT US</h1>

        </div>
        <div className='about-content'>
          <div className='content1'>
            <div className='text'>
              <p><b>Vanigasevai.com</b> is an online platform of <b>EalimNesaGiftson Technologies Private Limited</b>. This is a virtual accountancy company managed by a specialized panel of Business Analysts, Company Secretaries, Chartered Accountants, Corporate Lawyers and Financial Professionals. It is based in Chennai, Tamil Nadu. Our team of dedicated and skilled professionals provides quality services in both established and emerging markets, starting with the creation of the business plan to fulfilling all legal and regulatory requirements.</p>

              <p>With our expertise team and their abundant skill and loyalty we can set a new benchmark. We are constantly upgrading our process and keeping abreast of cutting-edge techniques to improve our customers' inherent needs by making them aware of business requirements and legal compliance through our renowned online platform.</p>
            </div>
            <div className='text'>
             <img src={require('../assets/img/about1.jpg')} alt='no image'/>
            </div>
          </div>

          <div className='content2'>
              <h2>WE ARE</h2>
            <p>Vanigasevai.com, the web portal of EalimNesaGiftson Technologies  Private Limited is a virtual accounting firm. We have been providing financial and legal advisory services to individuals and businesses since 2007 with a team of committed, research-oriented, and skilled professionals. In both established and emerging markets, we render quality services from planning to set up the business plan by fulfilling all legal and regulatory requirements.</p>
          </div>
          
          <div className='content1'>
          <div className='text'>
             <img src={require('../assets/img/about2.jpg')} alt='no image'/>
            </div>
            <div className='text'>
              <h4>Our Working Process</h4>
              <p>Vanigasevai is a technology-driven platform offering professional support and services in India. As part of our services, we provide incorporation of different types of entities, legal documentation, government registrations, and annual compliances.</p>
              <h4>Consistency  </h4>
              <p>Our primary aim is to provide continuous business service and support to our client base. We believe flexibility is the key to success and enforce it in our working pattern. We provide our clients with continuous support and comprehensive client satisfaction services, such as consulting and advisory services.</p>
           
            </div>
            
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default About