import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const blueButton = {
    backgroundColor:'#003054',
    fontFamily: 'Bebas Neue, tahoma',
    letterSpacing: '4px',
    border: 'none',
    borderRadius: '5px'
}

const ContactForm = () => {

    const { t } = useTranslation();

    (function () {
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
      
              form.classList.add('was-validated')
            }, false)
          })
      })()


    return(
        <form name="contact v1" method="post" className='mt-2 needs-validation' noValidate>
            <input type="hidden" name="form-name" value="contact" />
      
            <div className="form-group has-validation">
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name='name' 
                    placeholder={t('contact_form_name')}
                    required/>
                    <div class="invalid-feedback">
                        Please enter full name.
                    </div>
            </div>
            <br/>

            <div className="form-group has-validation">
                <input 
                    type="email"
                    className="form-control" 
                    id="email" 
                    name='email' 
                    placeholder={t('contact_form_email')}
                    required/>
                    <div class="invalid-feedback">
                        Please enter valid email.
                    </div>
            </div>
            <br/>

            <div className="form-group has-validation">
                <input 
                    type="text" 
                    className="form-control" 
                    id="phoneNumber" 
                    name='phoneNumber' 
                    placeholder={t('contact_form_phone')}
                    required/>
                    <div class="invalid-feedback">
                        Please enter phone number.
                    </div>
            </div>
            <br/>

            <div class="form-group has-validation">
                <textarea 
                    className="form-control" 
                    id="message" 
                    name='message' 
                    rows="2" 
                    placeholder={t('contact_form_message')} 
                    required></textarea>
                    <div class="invalid-feedback">
                        Please write a message.
                    </div>
            </div>
            <br/>

            <button type="submit" className='text-white float-end p-2' style={blueButton}>{t('contact_form_submit')}</button>
        </form>
    )
}

export default ContactForm;