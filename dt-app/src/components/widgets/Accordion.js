import React, { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Chevron from './Arrow';

import './Accordion.css';

const Accordion = props => {

    const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px");
    const [rotate, setRotate] = useState('accordion__icon');

    const content = useRef(null);

    const toggleAccordion = () => {
        setActive(active === "" ? "active" : "");
        setHeight( active === "active" ? "0px" : `${content.current.scrollHeight}px`);
        setRotate(active === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
    }

    return (
        <Container className='m-3 rounded'>
            <div className="accordion__section">
                <button className={`accordion ${active}`} onClick={toggleAccordion}>
                <p className="accordion__title">{props.quest}</p>
                <Chevron className={`${rotate}`} width={10} fill={"#777"} />
                </button>
                <div
                    ref={content}
                    style={{ maxHeight: `${height}` }}
                    className="accordion__content"
                >
                <div
                    className="accordion__text"
                    dangerouslySetInnerHTML={{ __html: props.ans }}
                />
                </div>
            </div>
        </Container>
  );
}

export default Accordion;