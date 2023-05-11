import { useState } from 'react'
import React  from 'react'
import { useNavigate } from "react-router-dom";
import './header.scss'

const Header = () => {

	const navigate = useNavigate();
	const goToDetails = (index) => {
        console.log("sf" + index);
        navigate("/Service-details/"  + index);
      };

  var i=1;
	function navbar(){
		i++;
		if(i%2===0){
			document.querySelector('.nav').style='display:flex;width: 50%;flex-direction: column; z-index:99;position: absolute;background: white;right: 0; top: 70px;'
      
		}
		if(i%2!==0){
			document.querySelector('.nav').style='display:none'
		}
		console.log('hi')
	}
	function fun(){
		if(document.querySelector('.nav').style.display=='flex'){
			document.querySelector('.nav').style='display:none'
			i=1
		}
	}

	const [cardAuthendication,changecardAuthendication]=useState(false)
	const [gstAuthendication,changegstAuthendication]=useState(false)
	const [ieAuthendication,changeieAuthendication]=useState(true)

  return (
    <div className='header'>
        <div className='header-container'>
            <div className='logo'>
               <img src={require('../assets/img/logo1.png')} alt='no image'/>
            </div>
			
            <div class="menu-bar">
				        <i class="fa fa-bars" onClick={navbar} ></i>
			      </div>

				 
            <div className='nav'  onClick={fun}>
				<a href='/#'><div className='nav-icon user-rel-gst ' onMouseOver={()=>changegstAuthendication(true)} onMouseLeave={()=>changegstAuthendication(false)}>
					<div>
						<p>GST <i className='fa fa-caret-down '></i> </p>
					</div>
					{
						gstAuthendication ?(
							<div className='user-card-gst' >
								<p><a href='/#' onClick={() => goToDetails(0)}> GST Registration</a></p>
								<p><a href='/#' >GST Return Filing</a></p>
								<p><a href='/#' >GST LUT Filing</a></p>
								<p><a href='/#' >GST Registration Cancellation </a></p>
								<p><a href='/#' >GST Advisory Services</a></p>
								<p><a href='/#' > GST Annual Return Filing</a></p>
							</div>
						)
						:null
						}
				</div></a>
				<a href='/#'><div className='nav-icon user-rel-it ' onMouseOver={()=>changecardAuthendication(true)} onMouseLeave={()=>changecardAuthendication(false)}>
					<div>
					
					<p>Income tax <i className='fa fa-caret-down '></i> </p>
					</div>
					{
						cardAuthendication ?(
							<div className='user-card-it' >
								<h5>Taxation</h5>
								<p><a href='/#'  >TDS Return Filing</a></p>
								<p><a href='/#' >Income Tax Return</a></p>
								<p><a href='/#' >PF Return Filing</a></p>
								

							</div>
						)
						:null
						}
				</div></a>
				
				<a href='/#'><div className='nav-icon user-rel-ie ' onMouseOver={()=>changeieAuthendication(true)} onMouseLeave={()=>changeieAuthendication(false)}>
					<div>
					
					<p>Import export <i className='fa fa-caret-down '></i> </p>
					</div>
					{
						ieAuthendication ?(
							<div className='user-card-ie'>
								<p><a href='/#' >Import Export Code  </a></p>
								<p><a href='/#' >Import Authorisation License</a></p>
								<p><a href='/#' >ICEGATE Registration </a></p>
								<p><a href='/#' >DGFT Consultancy </a></p>
								<p><a href='/#' >AD Code Registration</a></p>
								<p><a href='/#' >Indian Customs Consultancy </a></p>
								<p><a href='/#' >RCMC</a></p>
								<p><a href='/#' >EPCG </a></p>

							</div>
						)
						:null
						}
				</div>
				</a>


                <a href='/#' >HOME</a>
                <a href='/about' >ABOUT</a>
                <a href='/services' >OUR SERVICES</a>
                <a href='/contact' >CONTACT</a>
            </div>

        </div>
   

	</div>

	
	
  )
}

export default Header