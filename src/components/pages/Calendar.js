import React from 'react';
import { Container } from 'react-bootstrap';


const showCalendar = () => {
    const calendar = document.getElementById("calendar");
    const hostUrl = 'https://diversified-tax.netlify.app';
    // const hostUrl = 'localhost:3000';

    if(window.location.href === `${hostUrl}/calendar`) {
        if(calendar.style.display === 'none') {
            calendar.style.display = 'block';
            console.log("Now showing calendar")
        } else {
            calendar.style.display = 'none';
            console.log("Calendar is now hidden")

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