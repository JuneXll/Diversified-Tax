import React from 'react';
import showForm from '../../showForm';

const paddingTop = {
    paddingTop: 200
}

const ReturningPersonal = () => {
    return(
        <div style={paddingTop}>
            <h1>Returning Personal Clients</h1>
            {showForm()}
        </div>
    )
}

export default ReturningPersonal;