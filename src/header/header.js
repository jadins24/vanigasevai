import React from 'react'

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