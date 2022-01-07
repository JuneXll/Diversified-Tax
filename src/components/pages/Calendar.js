import React from 'react';
import { Container } from 'react-bootstrap';


const showCalendar = () => {
    const calendar = document.getElementById("calendar");
    const hostUrl = 'https://diversified-tax.netlify.app';
    // const hostUrl = 'localhost:3000';

    if(window.location.href === `${hostUrl}/calendar`) {
        if(calendar.style.display === 'none') {
            console.log("Now showing calendar")
            calendar.style.display = 'block';
            
        } else {
            console.log("Calendar is now hidden")
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