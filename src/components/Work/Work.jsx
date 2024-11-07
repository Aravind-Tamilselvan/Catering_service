import React from 'react'
import '../../style/style.css'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FlatwareIcon from '@mui/icons-material/Flatware';

const Work = () => {
  return (
         <section className='work-wrapper'>
        <div className='work-container'>
    <i>Our Work</i>
    <h4>Our Working Proccess</h4>
    <p>Lorem ipsum adipisicing elit. Tempora placeat deserunt, cupiditate asperiores sed velit quos quisquam aspernatur eos tenetur dolor eligendi! Tempora.</p>
    </div>
    <div className='card-wrapper'>
        <div className='card-table'>
<div className='card-container'>
    <div className='circle'>
        <h2>01</h2>
        </div>
        <div className='card'>
<PhoneIphoneIcon/>
        </div>
        <h2>Make an Appointment</h2>
        <p>Lorem ipsum dolor sit, amet Recusandae repellattoo blanditiis quaerat voluptates voluptatem ullam quae perspiciatis corrupti libero necessitatibus.</p>
   
    </div>

    <div className='card-container'>
    <div className='circle'>
        <h2>02</h2>
        </div>
        <div className='card'>
        <CreditCardIcon />
        </div>
        <h2>Pay Your Catering</h2>
        <p>Lorem ipsum dolor sit, amet Recusandae repellattoo blanditiis quaerat voluptates voluptatem ullam quae perspiciatis corrupti libero necessitatibus.</p>
   
    </div>

    <div className='card-container'>
    <div className='circle'>
        <h2>03</h2>
        </div>
        <div className='card'>
<FlatwareIcon />
        </div>
        <h2>Enjoy Your Food</h2>
        <p>Lorem ipsum dolor sit, amet Recusandae repellattoo blanditiis quaerat voluptates voluptatem ullam quae perspiciatis corrupti libero necessitatibus.</p>
   
    </div>
    </div>
    </div>
    </section>
  )
}

export default Work