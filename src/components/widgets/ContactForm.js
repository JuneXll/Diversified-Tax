import React, { useState } from 'react';
//Validation of form
// import { navigate } from 'gatsby'
import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
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

// const schema = yup.object().shape({
//     name: yup.string().required(),
//     email: yup.string().required().email(),
//     phoneNumber: yup.number().required().min(10).max(10),
//     message: yup.string().required().min(10)

// });

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
        // resolvers: yupResolver(schema),
        mode: 'onChange'
    });

   const [state, setState] = useState({});

   const handleChange = e => {
    setState({...state, [e.target.name]: e.target.value})
    };
    
    // submit
    const onSubmit = (data, e) => {
        e.preventDefault();
        // const form = e.target;
        console.log(data);
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
          })
          .catch(error => console.log(error));
      };
    return(
        <form 
            name="contact v1" 
            method="POST" 
            className='mt-2' 
            onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="form-name" value="contact" />
      
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    // id="name" 
                    name='name' 
                    placeholder={t('contact_form_name')}
                    onChange={handleChange}
                    {...register('name', { 
                        required: true
                    })}
                    />
                    {errors.name && errors.name.type === 'required' && <p className="p-1 text-white">Name is required</p>}
            </div>
            <br/>

            <div className="form-group">
                <input 
                    type="email"
                    className="form-control" 
                    // id="email" 
                    name='email' 
                    placeholder={t('contact_form_email')}
                    onChange={handleChange}
                    {...register('email', {
                        required: true,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      })}
                    />
                    {errors.email && errors.email.type === 'required' &&
                    <p className="p-1 text-white">Enter a valid email.</p>}
            </div>
            <br/>

            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    // id="phoneNumber" 
                    name='phoneNumber' 
                    placeholder={t('contact_form_phone')}
                    onChange={handleChange}
                    {...register('phoneNumber', {
                        required: true,
                        pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
                    })}
                    />
                    {errors.phoneNumber && errors.phoneNumber.type === 'required' &&
                    <p className="p-1 text-white">Enter a valid phone number.</p>}
            </div>
            <br/>

            <div class="form-group">
                <textarea 
                    className="form-control" 
                    // id="message" 
                    name='message' 
                    rows="2" 
                    placeholder={t('contact_form_message')} 
                    onChange={handleChange}
                    {...register('message', {
                        required: true,
                        minLength: 5
                    })}
                    ></textarea>
                    {errors.message && errors.message.type === 'required' &&
                    <p className="p-1 text-white">Enter a massage longer than 5 characters.</p>}
            </div>
            <br/>

            <button type="submit" className='text-white float-end p-2' style={blueButton}>{t('contact_form_submit')}</button>
        </form>
    )
}

export default ContactForm;