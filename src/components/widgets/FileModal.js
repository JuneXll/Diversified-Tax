import React from "react";
import { Modal, Button, Col, Image, Container } from 'react-bootstrap';
//Imports media hoook
import useMediaQuery from '../../hooks/useMediaQuery';

import '../../styles/FileModal.css';

const filedModalImg = 'https://ik.imagekit.io/diversifiedtax/images/filed-modal.png?updatedAt=1640736927865';

//Jumbotron image styles
const imgCover = {
    backgroundImage: `url(${filedModalImg})`,
    backgroundSize: '100%',
    backgroundPosition: 'center'
  }


const FileModal = ({closeModal}) => {

    // //Sets media for smaller devices
    const matches = useMediaQuery("(min-width:580px)"); 

    return (
        <Modal
            size='lg'
            show={closeModal}
            onHide={closeModal}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Body className='p-0'>
                <Container className='row p-0 m-0'>
                    {matches && (
                    <Col className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mx-auto p-0 m-0">
                        <div className='jumbotron' style={imgCover}>
                            {/* <Image fluid src={filedModalImg}/> */}
                            <div></div>
                        </div>
                    </Col>
                    )}
                    <Col id='modalBody' className='d-column col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mx-auto'>
                        <Container className='p-0'>
                            <Button 
                                id='closeBtn'
                                className='float-end'
                                onClick={() => closeModal(false)}
                                >X</Button>
                        </Container>
                        <Container id='modalText'>
                            <p>Have you filed with us before?</p>
                            <Container id='btnContainer' className='mb-3'>
                                <Button 
                                    id='btns'
                                    className='mx-3'
                                    href='/returning-personal-clients'
                                    >Yes
                                </Button>
                                <Button 
                                    id='btns'
                                    href='/new-personal-clients'
                                    >No
                                </Button>
                            </Container>
                        </Container>
                </Col>
                </Container>
                
            </Modal.Body>
        </Modal>
    )
}

export default FileModal;