import React, { useState } from 'react';
//Validation of form
// import { navigate } from 'gatsby'
import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

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
        // resolvers: yupResolver(schema)
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
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ 
                "form-name": "contact",
                ...data
            })
        })
          .then(response=>{
              reset();
              console.log(response);
          })
          .catch(error => console.log(error));
      };
    // const onSubmit = (data) => console.log(data);
    // console.log(errors)

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
                    id="name" 
                    name='name' 
                    placeholder={t('contact_form_name')}
                    onChange={handleChange}
                    {...register('name')}
                    />
                    {errors.name && <p>Name is required</p>}
            </div>
            <br/>

            <div className="form-group">
                <input 
                    type="email"
                    className="form-control" 
                    id="email" 
                    name='email' 
                    placeholder={t('contact_form_email')}
                    onChange={handleChange}
                    {...register('email')}
                    />
            </div>
            <br/>

            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="phoneNumber" 
                    name='phoneNumber' 
                    placeholder={t('contact_form_phone')}
                    onChange={handleChange}
                    {...register('phoneNumber')}
                    />
            </div>
            <br/>

            <div class="form-group">
                <textarea 
                    className="form-control" 
                    id="message" 
                    name='message' 
                    rows="2" 
                    placeholder={t('contact_form_message')} 
                    onChange={handleChange}
                    {...register('message')}
                    ></textarea>
            </div>
            <br/>

            <button type="submit" className='text-white float-end p-2' style={blueButton}>{t('contact_form_submit')}</button>
        </form>
    )
}

export default ContactForm;