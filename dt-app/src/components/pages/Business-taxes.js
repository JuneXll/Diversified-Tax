import React from 'react';
import { Container, Image } from 'react-bootstrap';
import personalCover from '../../images/oldCalc.jpg';

const paddingTop = {
    paddingTop: 100
}

const blueDiv = {
    backgroundColor: '#003054',
    borderRadius: '5px',
    width: '100wv',
    height: '50vh',
    boxShadow: '5px 5px 5px #ccc'
}

const picDiv = {
    width: '50%',
    height: '45vh',
}

const img = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: '5px'
}

const Business = () => {
    return (
        <div style={paddingTop}>
            <div style={blueDiv}>
                <h1 className='text-white text-center align-center'>Business Taxes</h1>
            </div>
            <div className='position-relative'>
                <div className='position-absolute top-0 start-50 translate-middle'style={picDiv}>
                    <Image fluid src={personalCover} style={img}/>
                </div>
            </div>
            <Container style={{marginTop:'40vh'}}>
                <h1>HELLO!</h1>
            </Container>
            
        </div>
    )
}

export default Business;