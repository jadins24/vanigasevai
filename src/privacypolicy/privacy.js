import React from 'react'
import './privacy.scss';

const Privacy = () => {
  return (
    <div className='privacy'>
      <div className='privacy-container'>
        <div className='privacy-head'>
          <h2>PRIVACY POLICY</h2>
        </div>
        <div className='privacy-content'>
          <h2>WHAT IS PRIVACY POLICY?</h2>
          <p>A privacy policy is a document that outlines the methods and purposes for collecting, utilizing, sharing, and safeguarding the personal data of a customer or client, in compliance with privacy laws. Personal information includes any details that identify an individual. It includes their name, address, date of birth, marital status, contact information, ID numbers, financial records, credit reports, medical history, travel destinations, and purchasing preferences</p>

          <h2>APPLICABLE LAW INDIA</h2>
          <p>The Information Technology (Amendment) Act, 2008 is an Indian law that made significant changes to the Information Technology Act of 2000. One of the changes introduced by this amendment was the addition of Section 43A. This section is concerned with the handling of sensitive personal data or information by a body corporate.</p>
          <p>Section 43A requires a body corporate that deals with sensitive personal data or information in a computer resource that it owns, controls or operates, to implement and maintain reasonable security practices and procedures. If the body corporate fails to do so and its negligence results in wrongful loss or wrongful gain to any person, then the affected person is entitled to receive compensation.</p>
          <p>To help ensure that body corporates handle personal information in accordance with reasonable security practices and procedures, the Government of India prescribed the Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011. These rules require body corporates to provide a privacy policy for handling personal information, including sensitive personal data or information. The privacy policy must contain clear and easily accessible statements of the body corporate's practices and policies, the type of personal or sensitive personal data or information collected, the purpose of collection and usage of such information, disclosure of information including sensitive personal data or information, and reasonable security practices and procedures.</p>
          <p>The privacy policy must be published on the body corporate website and made available for view by providers of information who have provided personal information under a lawful contract. This helps ensure transparency in body corporates' handling of personal information, and helps individuals make informed decisions about providing their personal information. </p> 
        </div>
      </div>
    </div>
  )
}

export default Privacy