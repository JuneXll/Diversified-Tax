import React from 'react';
import { Container } from 'react-bootstrap';


const showCalendar = () => {
    const calendar = document.getElementById("calendar");

    if(window.location.href === 'https://diversified-tax.netlify.app/calendar') {
        if(calendar.style.display === 'none') {
            calendar.style.display = 'block';
        } else {
            calendar.style.display = 'none';
        }
    }

}

const Calendar = () => {
   
    return (
        <Container>
            {showCalendar()}
        </Container>
    )
}

export default Calendar;