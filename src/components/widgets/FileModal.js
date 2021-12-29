import React from "react";
import { Modal, Button, Col, Image, Container } from 'react-bootstrap';

import '../../styles/FileModal.css';

const filedModalImg = 'https://ik.imagekit.io/diversifiedtax/images/filed-modal.png?updatedAt=1640736927865';

const FileModal = ({closeModal}) => {
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
                    <Col className="col-lg-6 p-0 m-0">
                        <Image fluid src={filedModalImg}/>
                    </Col>

                    <Col id='modalBody' className='d-column col-lg-6'>
                        <Container className='p-0'>
                            <Button 
                                id='closeBtn'
                                className='float-end'
                                onClick={() => closeModal(false)}
                                >X</Button>
                        </Container>
                        <Container id='modalText'>
                            <p>Have you filed with us before?</p>
                            <Container id='btnContainer'>
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