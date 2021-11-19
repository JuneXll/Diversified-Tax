import React from 'react';
import { Container} from 'react-bootstrap';
import { personalFaq } from '../../questionData/personalFaq';
import Accordion from './Accordion';

const headings = {
    lineHeight: '2',
    letterSpacing: '4px',
    fontFamily: 'Bebas Neue, cursive',
    color: 'white'
}

const questionDiv = {
    backgroundColor: '#e1ad00',
    borderRadius: '5px',
    boxShadow: '5px 5px 5px #ccc'
}

// const questionText = {
//     letterSpacing: '2px',
//     fontFamily: 'Open Sans, sans-serif',
//     backgroundColor: '#003054',
// }

const Faq = () => {

    const renderQuestion = (question) => {
        return(
            <Accordion quest={question.question} ans={question.answer}/> 
        )
    }

    return(
        <Container className='p-5' style={questionDiv}>
            <h1 className='text-center' style={headings}>FAQ</h1>
            {personalFaq.map(renderQuestion)}
        </Container>
    )
}


export default Faq;

// const Faq = () => {

//     // States to control toggle effect on faq
//     const [showAnswer, setShowAnswer] = useState(false);
//     const [currentId, setCurrentId] = useState(null);
    
//     //Will render one question and show/hide answer when span is clicked
//     const renderQuestion = (question) => {
//         const onClick = () => {
//             setCurrentId(question.id);
//             setShowAnswer(!showAnswer);
//         }

//         return (
//             <div className='my-2 p-2' style={questionDiv} key={question.id}>
//                 <p className='m-2' style={questionText}>
//                     <span className='p-2' onClick={onClick}>
//                     {showAnswer ? (<i className="fas fa-angle-up"></i>) : (<i className="fas fa-angle-down m-1"></i>)}
//                     </span>{question.question}</p>
//                 {currentId === question.id && showAnswer === true && (<p className='p-3' style={questionText}>{question.answer}</p>) }
//             </div>
//         )

//     }

//     //Container where all the questions will be rendered dynamically
//     return(
//         <Container>
//             <Container className='my-5' style={{backgroundColor:'#e1ad00', borderRadius:'5px', boxShadow: '5px 5px 5px #ccc'}}>
//                 <Container className='text-white'>
//                     <h1 className='pt-2 text-center' style={headings}>FAQ</h1>
//                     <Row className='p-4'>
//                         {personalFaq.map(renderQuestion)}
//                     </Row>
//                 </Container>
//             </Container>
//         </Container>
//     )
// }