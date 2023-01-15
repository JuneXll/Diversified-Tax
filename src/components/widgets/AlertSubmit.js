import React, { useState } from 'react';
import { Alert,Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

//Styles for banner
const openAlert = {
    backgroundColor: '#E1AD00',
    borderColor: '#E1AD00',
    color: '#003054',
    fontFamily: 'Open Sans, sans-serif',
    letterSpacing: '2px',
    boxShadow: '5px 5px 5px #ccc'
}

const allDone = {
    fontFamily: 'Open Sans, sans-serif',
    letterSpacing: '2px',
    color: 'white',
    backgroundColor: '#003054',
}

const alertStyles = {
    fontFamily: 'Open Sans, sans-serif',
    letterSpacing: '2px',
    color: '#003054',
    boxShadow: '5px 5px 5px #ccc'
}

const taxCheck = "https://drive.google.com/file/d/1jT7Yf0uZjlgECPA82-9UUjUlZxYxi7Sn/view"

const AlertSubmit = () => {
    const [show, setShow] = useState(false);

    //Sets translations for the page
    const { t } = useTranslation();
          
    return (
        <>
            <Alert show={show} variant="warning" style={alertStyles}>
                <Alert.Heading><strong>{t('alert_heading')}</strong></Alert.Heading>
                <p>
                    <strong>{t('alert_click')} <Alert.Link href={taxCheck} target='_blank'>{t('alert_here')}</Alert.Link> {t('alert_download_cl')}</strong>
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button style={allDone} onClick={() => setShow(false)} >
                    {t('alert_all_done')}
                    </Button>
                </div>
                </Alert>
          
                {!show && 
                    <div className='d-grid my-2'>
                        <Button style={openAlert} onClick={() => setShow(true)}>{t('alert_not_sure')}</Button>
                    </div>
                }
              </>
            );
}

export default AlertSubmit;