import React from 'react';
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

    // const [form, setForm] = useState({});
    // const [errors, setErrors] = useState({});

    // const setField = (field, value) => {
    //     setForm({
    //         ...form,
    //         [field]:value
    //     })
    // }

    // const findFormError = () => {
    //     const {name, email, phoneNumber, message} = form;
    //     const newError = {};
    //     //name errors
    //     if( !name || name === ''){
    //         newErrors.name = 'Field cannot be blank.'
    //     } else if (name.length > 30){
    //         newErrors.name = "Name is too long."
    //     }
    //     //email errors
        
    // }

    return(
        <form name="contact v1" method="post" className='mt-2'>
            <input type="hidden" name="form-name" value="contact" />
      
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name='name' 
                    placeholder={t('contact_form_name')}
                    // onChange={e => setField('name', e.target.value)}
                    required/>
            </div>
            <br/>

            <div className="form-group">
                <input 
                    type="email"
                    className="form-control" 
                    id="email" 
                    name='email' 
                    placeholder={t('contact_form_email')}
                    // onChange={e => setField('email', e.target.value)}
                    required/>
            </div>
            <br/>

            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="phoneNumber" 
                    name='phoneNumber' 
                    placeholder={t('contact_form_phone')}
                    // onChange={e => setField('phoneNumber', e.target.value)}
                    required/>
            </div>
            <br/>

            <div class="form-group">
                <textarea 
                className="form-control" 
                id="message" 
                name='message' 
                rows="2" 
                placeholder={t('contact_form_message')} 
                // onChange={e => setField('message', e.target.value)}
                required></textarea>
            </div>
            <br/>

            <button type="submit" className='text-white float-end p-2' style={blueButton}>{t('contact_form_submit')}</button>
        </form>
    )
}

export default ContactForm;