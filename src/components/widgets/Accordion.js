import React, { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Arrow from './Arrow';

import '../../styles/Accordion.css';

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
        <Container className='m-2'>
            <div className="accordion__section" >
                <button className={`accordion ${active} p-3`} onClick={toggleAccordion} style={{borderTopRightRadius:'5px', borderTopLeftRadius:'5px'}} aria-label='Toggle open'>
                <p className="accordion__title">{props.quest}</p>
                <Arrow className={`${rotate}`} width={10} fill={"white"} />
                </button>
                <div
                    ref={content}
                    style={{ maxHeight: `${height}`,borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}
                    className="accordion__content"
                >
                <div
                    className="accordion__text"
                    dangerouslySetInnerHTML={props.ans && props.link ? ({ __html: `${props.ans} <a href=${props.link} aria-labelledby='IRS-Where is my refund' style="color:#E1AD00" target='_blank' rel="noreferrer">here.</a>`}) : ({ __html: props.ans}) }
                />
                </div>
            </div>
        </Container>
  );
}

export default Accordion;

