import React, { useState } from 'react';
import { Alert,Button } from 'react-bootstrap';

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

const AlertSubmit = () => {
    const [show, setShow] = useState(false);
          
    return (
        <>
            <Alert show={show} variant="warning" style={alertStyles}>
                <Alert.Heading><strong>Forgot Something?</strong></Alert.Heading>
                <p>
                    <strong>Don't sweat it! Click <Alert.Link href='/extra-forms'>here</Alert.Link> to submit your extra documents.</strong>
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button style={allDone} onClick={() => setShow(false)} >
                      All done!
                    </Button>
                </div>
                </Alert>
          
                {!show && 
                    <div className='d-grid my-2'>
                        <Button style={openAlert} onClick={() => setShow(true)}>Forgot to submit extra documents?</Button>
                    </div>
                }
              </>
            );
}

export default AlertSubmit;