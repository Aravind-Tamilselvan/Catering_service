import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../style/style.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS credentials
    // const serviceID = 'service_1pkphrb';
    const templateID = 'template_yj64e9h';
    const userID = 'QhccLs5Zzyhg4-hHc';
    const serviceID = 'service_oybxenm';

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Email sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error('Error sending email.');
        }
      );
  };

  return (
    <div className='cta-wrapper-contact'>
      <div className='cta-container'>
        <div className='cta-contact-location'>
        <h3>Location</h3>
        <h5><i className="bi bi-geo-alt-fill"></i>TAMIL NADU -  641301</h5>
        <p>Mettupalayam Rd,  <br></br>
          Jadayampalayam Pudur, <br></br>
          Chickadasampalayam, Tamil Nadu 641301<br></br>
          Phone: +91 90958 84488 ,+91 77088 98999<br></br>
          Mail: rehobothtilesmtp@gmail.com
        </p>
        <iframe
          src="https://maps.app.goo.gl/Yxk76e4jHCEEMGrq8"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </div>

      <div className='cta-container' style={{ marginLeft: '30px' }}>
        <form ref={form} onSubmit={sendEmail}>
          <h3>Contact Us</h3>
          <div className="form-element">
            <input type="text" placeholder='Please Enter Your Name' name="name" required />
          </div>
          <div className="form-element">
            <input type="email" placeholder='Please Enter Your Email' name="email" required />
          </div>
          <div className="form-element">
            <input type="tel" placeholder='Please Enter Your Phone Number' name="phone" />
          </div>
          <div className='selection'>
        {/* <select className='menus' name="menu">
          <option>Menu</option>
          <option>Veg</option>
          <option>Non-Veg</option>
          <option>Both</option>
        </select>
          <select className='function' name="function">
          <option >Function</option>
          <option >Marriage Ceremony</option>
          <option >Engagement Party</option>
          <option >Birthday Celebration</option>
          <option >Baby Shower</option>
          <option >Housewarming Party</option>
          <option >Memorial Service</option>
          <option >Retirement Party</option>
          <option >Graduation Ceremony</option>
          <option >Baptism/Christening</option>
          <option >Cultural Festivals</option>
        </select> */}

        </div>
          <div className="form-element">
            <textarea name="message" placeholder='Please Enter Your Message' required />
          </div>
          <div className="form-element">
            <input className="submit-btn" type="submit" value="Send Enquiry" />
          </div>
        </form>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
    
  );
};

export default Contact;
