import React from 'react'
import './banking.scss';

const Banking = () => {
  return (
    <div className='banking'>
        <div className='banking-container'>
            <div className='banking-head'>
                <h1>Our Banking Partners</h1>
            </div>

            <div className='banking-content'>
                <div className='content1'>
                    <img src={require('../assets/img/bank1.jpg')} alt='no image'/>
                </div>
                <div className='content1'>
                    <img src={require('../assets/img/bank2.jpg')} alt='no image'/>
                </div>
                <div className='content1'>
                    <img src={require('../assets/img/bank3.jpg')} alt='no image'/>
                </div>
                <div className='content1'>
                    <img src={require('../assets/img/bank4.png')} alt='no image'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banking