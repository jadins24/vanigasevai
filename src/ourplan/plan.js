import React from 'react'
import './plan.scss';


const Plan = () => {

    const showAlert = () => {
        window.alert('Hello, world!');
      };
    
  return (

    <div className='plan'>
        <div className='plan-container'>
            <div className='plan-head'>
                <h2>Choose Our Best Plan</h2>
            </div>
            <div className='plan-content'>
                <div className='contentp'>
                    <div className='content1'>
                        <h3>Proprietorship <br></br>Registration</h3>
                        <hr></hr>
                        <h2>RS 1999 <span>/ Excl GST</span></h2>
                        <hr></hr>

                        <div className='list'>
                            <p><i className="fa fa-check-circle" aria-hidden="true"></i> GST Registration</p>
                            <p><i className="fa fa-check-circle" aria-hidden="true"></i>  MSME Registration</p>
                            <p><i className="fa fa-check-circle" aria-hidden="true"></i>  Current Account Opening - ICICI Bank</p>


                        </div>

                        <div className='btn-box'>
                            <div className='buy-btn'>
                                BUY NOW
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contentp'>
                    <div className='content1'>
                        <h3>Incorporation of Private<br></br> Limited Company</h3>
                        <hr></hr>
                        <h2>RS 6141 <span>/ Excl GST</span></h2>
                        <hr></hr>

                        <div className='list'>
                            <p><i className="fa fa-check-circle" aria-hidden="true"></i> DSC - 2 Nos. (2yrs validity)</p>
                            <p><i className="fa fa-check-circle" aria-hidden="true"></i>   Director Identification Number - 2 Nos.</p>
                            <p><i className="fa fa-check-circle" aria-hidden="true"></i>  Name Approval for Company</p>
                            <p><i className="fa fa-check-circle" aria-hidden="true"></i>   Incorporation of Pvt Ltd Company</p>
                            <p><i className="fa fa-check-circle" aria-hidden="true"></i>   PAN & TAN for the Company</p>
                            <p><i className="fa fa-check-circle" aria-hidden="true"></i>   Current Account Opening - ICICI Bank</p>
                             
                        </div>

                        <div className='btn-box'>
                            <div className='buy-btn' onClick={showAlert}>
                                BUY NOW
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contentp'>
                    <div className='content1'>
                        <h3>Incorporation of Limited<br></br> Liability Partnership</h3>
                        <hr></hr>
                        <h2>RS 6525 <span>/ Excl GST</span></h2>
                        <hr></hr>

                        <div className='list'>
                            <p><i className="fa fa-check-circle" aria-hidden="true"></i>  DSC - 2 Nos. (2yrs validity)</p>
                            <p><i className="fa fa-check-circle" aria-hidden="true"></i>   DPIN - 2 Nos.</p>
                            <p><i className="fa fa-check-circle" aria-hidden="true"></i>  Name Approval for LLP </p>
                            <p><i className="fa fa-check-circle" aria-hidden="true"></i>  Preparation of LLP Agreement </p>
                            <p><i className="fa fa-check-circle" aria-hidden="true"></i>  Incorporation of LLP </p>
                            <p><i className="fa fa-check-circle" aria-hidden="true"></i>  Form-3 Filing </p>
                            <p><i className="fa fa-check-circle" aria-hidden="true"></i>  PAN & TAN for the LLP </p>
                            <p><i className="fa fa-check-circle" aria-hidden="true"></i>   Current Account Opening - ICICI Bank </p>
                             
                        </div>

                        <div className='btn-box'>
                            <div className='buy-btn'>
                                BUY NOW
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>

        </div>
    </div>
  )
}

export default Plan