import React, { useState } from 'react';
//Validation of form
// import { navigate } from 'gatsby'
import { useForm } from 'react-hook-form';
//Translations
import { useTranslation } from 'react-i18next';

//Stylings
const blueButton = {
    backgroundColor:'#003054',
    fontFamily: 'Bebas Neue, tahoma',
    letterSpacing: '4px',
    border: 'none',
    borderRadius: '5px'
}

const errorPadding = {
    paddingTop: '1em',
    paddingLeft: '1em'
}

const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

const ContactForm = () => {
    //Set translation for page
    const { t } = useTranslation();

    //react-hook form
    const{  
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm({
            mode: 'onChange'
            });

    //Set state for form
    const [state, setState] = useState({});
    //Handle form changes
    const handleChange = e => {
        setState({...state, [e.target.name]: e.target.value})
    };
    
    // Submit
    const onSubmit = (data, e) => {
        e.preventDefault();
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ 
                "form-name": e.target.getAttribute("name"),
                ...data
            })
        })
          .then(response => {
              reset();
              console.log(response);
              window.location.assign('https://diversified-tax.netlify.app/success');
          })
          .catch(error => console.log(error));
      };
    return(
        <form 
            name="contact v1" 
            method="POST" 
            className='mt-2' 
            action='/success'
            onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="form-name" value="contact" />
      
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    name='name' 
                    placeholder={t('contact_form_name')}
                    onChange={handleChange}
                    {...register('name', { 
                        required: true,
                        pattern: /^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}$/
                    })}
                    />
                    {errors.name && <p className="text-white" style={errorPadding}>{t('contact_name_error')}</p>}
            </div>
            <br/>

            <div className="form-group">
                <input 
                    type="email"
                    className="form-control" 
                    name='email' 
                    placeholder={t('contact_form_email')}
                    onChange={handleChange}
                    {...register('email', {
                        required: true,
                        pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      })}
                    />
                    {errors.email &&
                    <p className="text-white" style={errorPadding}>{t('contact_email_error')}</p>}
            </div>
            <br/>

            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    name='phoneNumber' 
                    placeholder={t('contact_form_phone')}
                    onChange={handleChange}
                    {...register('phoneNumber', {
                        required: true,
                        maxLength: 10, 
                        pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i
                        })}
                    />
                    {errors.phoneNumber &&
                    <p className="text-white" style={errorPadding}>{t('contact_phone_error')}</p>}
            </div>
            <br/>

            <div class="form-group">
                <textarea 
                    className="form-control" 
                    name='message' 
                    rows="2" 
                    placeholder={t('contact_form_message')} 
                    onChange={handleChange}
                    {...register('message', {
                        required: true,
                        minLength: 10
                    })}
                    ></textarea>
                    {errors.message &&
                    <p className="text-white" style={errorPadding}>{t('contact_message_error')}</p>}
            </div>
            <br/>

            <button type="submit" className='text-white float-end p-2' style={blueButton}>{t('contact_form_submit')}</button>
        </form>
    )
}

export default ContactForm;