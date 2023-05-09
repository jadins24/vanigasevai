import { useState } from 'react'
import React  from 'react'

import './header.scss'

const Header = () => {


  var i=1;
	function navbar(){
		i++;
		if(i%2==0){
			document.querySelector('.nav').style='display:flex;width: 50%;flex-direction: column; z-index:99;position: absolute;background: white;right: 0; top: 70px;'
      
		}
		if(i%2!=0){
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

	const [cardAuthendication,changecardAuthendication]=useState(true)
  

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
				<a href=''><div className='nav-icon user-rel ' onMouseOver={()=>changecardAuthendication(true)} onMouseLeave={()=>changecardAuthendication(false)}>
					<div>
						<p>GST <i className='fa fa-caret-down '></i> </p>
					</div>
					{
						cardAuthendication ?(
							<div>

							</div>
						)
						:null
						}
				</div></a>
				<a href=''><div className='nav-icon user-rel ' onMouseOver={()=>changecardAuthendication(true)} onMouseLeave={()=>changecardAuthendication(false)}>
					<div>
					
					<p>Income tax <i className='fa fa-caret-down '></i> </p>
					</div>
					{
						cardAuthendication ?(
							<div></div>
						)
						:null
						}
				</div></a>
				


                <a href='/' >HOME</a>
                <a href='/about' >ABOUT</a>
                <a href='/services' >OUR SERVICES</a>
                <a href='/contact' >CONTACT</a>
            </div>

        </div>
   

	</div>

	
	
  )
}

export default Header