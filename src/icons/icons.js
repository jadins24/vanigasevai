import React from 'react'
import './icons.scss';

const Icons = () => {
  return (
    <div className='icons'>
        <div className='icon1'>
            <a href='https://wa.me/+919342616702' target='_blank'><i className="fa fa-whatsapp whatsapp"></i></a>
        </div>
        <div className='icon1'>
            <a href='tel:+919342616702'><i className="fa fa-phone phone"></i></a>
        </div>
    </div>
  )
}

export default Icons