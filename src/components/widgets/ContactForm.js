import React from 'react';

const blueButton = {
    backgroundColor:'#003054',
    fontFamily: 'Bebas Neue, cursive',
    letterSpacing: '4px',
    border: 'none',
    borderRadius: '5px'
}


const ContactForm = () => {
    return(
        <form name="contact" method="post" className='mt-2'>
            <input type="hidden" name="form-name" value="contact" />
      
            <div className="form-group">
                <input type="text" className="form-control" id="name" name='name' placeholder="Full Name" required/>
            </div>
            <br/>
            <div className="form-group">
                <input type="email" className="form-control" id="email" name='email' placeholder="Email"/>
            </div>
            <br/>
            <div className="form-group">
                <input type="number" className="form-control" id="phone-number" name='phone-number' placeholder="Phone Number"/>
            </div>
            <br/>
            <div className="form-group">
                <select 
                    aria-label="Personal or Business Dropdown" 
                    className='form-select'
                    name="dropdown">
                    <option disable>Personal or Business</option>
                    <option value="personal">Personal</option>
                    <option value="business">Business</option>
                    <option value="both">Personal and Business</option>
                </select>
            </div>
            <br/>
            <div data-netlify-recaptcha="true"></div>
            <br/>
            <button type="submit" className='text-white float-end p-2' style={blueButton}>Submit</button>
        </form>
    )
}

export default ContactForm;