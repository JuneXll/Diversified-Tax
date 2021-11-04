import React from 'react';
import { Container} from 'react-bootstrap';

const header = {
    color: 'white',
    fontFamily: 'Bebas Neue, tahoma',
    letterSpacing: 5,
}

const bodyFont = {
    color: 'white',
    fontFamily: 'Open Sans, san serif',
}

const yellowBack = {
    backgroundColor: '#e1ad00',
    borderRadius: 5
}

const Contact = () => {

    return (
        <div style={{paddingTop: 100}}>
            <div style={{backgroundColor:'#003054'}}>
                <Container>
                    <Container className='flex-column justify-content-center p-5'>
                        <h1 style={header}>Contact Us</h1>
                        <p style={bodyFont}>We know that the tax needs for each person or business are unique. Use our form to tell us more about your needs and concerns. We will give you a free quote for your tax preparation.</p>
                    </Container>
                    <Container className="p-5 d-flex justify-content-between">
                        <Container className='p-3' style={yellowBack}>
                            <h3 style={header}>Form</h3>
                            <p style={bodyFont}>Form</p>
                            <p style={bodyFont}>Form</p>
                            <br/>
                            <h3 style={header}>Form</h3>
                            <p style={bodyFont}>Form</p>
                            <p style={bodyFont}>Form</p>
                        </Container>

                        <Container className='flex-column align-content-center p-3' style={yellowBack}>
                            <h3 style={header}>Diversified Tax</h3>
                            <p style={bodyFont}>6532 Miami Lakes Drive,</p>
                            <p style={bodyFont}>Miami Lakes, Florida 33014</p>
                            <br/>
                            <h3 style={header}>Ricardo Pachon</h3>
                            <p style={bodyFont}>(305)-527-5133</p>
                            <p style={bodyFont}>taxes@diversifiedtax.us</p>
                        </Container>
                    </Container>
                </Container>
            </div>
        </div>
    )
}

export default Contact;
