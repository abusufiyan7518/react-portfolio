import React from 'react'
import './Contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import twitterIcon from '../../assets/twitter.png'
import instagramIcon from '../../assets/instagram.png'
import youtubeIcon from '../../assets/youtube.png'
import facebookIcon from '../../assets/facebook-Icon.png'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contact = () => {
     const form = useRef();
     const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ty2srjp', 'template_q6s89ek', form.current, {
        publicKey: '0PN5mTA_3KoeaJr2M',
      })    
      .then(
        () => {     
          console.log('SUCCESS!');
        },     
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id='contactPage'>
        <div id='clients'>
            <h1 className="contactPageTitle">My Clients</h1>
            <span className="clientDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos! Quia, voluptas. Quia, quos! Quia, voluptas. Quia, voluptas. Quia, voluptas. Quia, volupt
            </span>
            <div className="clientImgs">
                <img src={Walmart} alt="" className="clientImg" />
                 <img src={Adobe} alt="" className="clientImg" />
                  <img src={Microsoft} alt="" className="clientImg" />
                   <img          src={Facebook} alt="" className="clientImg" />
            </div>
        </div>
        <div id='contact'>
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos! Quia,
                </span>
                <form  className="contactForm" ref={form} onSubmit={sendEmail}>
                   <input type="text" className="name" placeholder='Your name' name='from_name' required />

                   <input type="email" className="email" placeholder='Your email' name='your_email' required/>
                   <input type="hidden" name='to_name' value='Abusufiyan' />
                   <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                   <button type='submit' value="Send" className='submitBtn'>Submit</button>
                   <div className="links">
                    <img src={facebookIcon} alt="" className="link" />
                    <img src={twitterIcon} alt="" className="link" />
                    <img src={youtubeIcon} alt="" className="link" />
                    <img src={instagramIcon} alt="" className="link" />
                   </div>
                </form>
        
        </div>
    </div>
  )
}

export default Contact
