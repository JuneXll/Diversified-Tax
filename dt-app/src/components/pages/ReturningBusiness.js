import React from 'react';
import showForm from '../../showForm';

const paddingTop = {
    paddingTop: 200
}

const ReturningBusiness = () => {
    return(
        <div style={paddingTop}>
            <h1>Returning Business Clients</h1>
            {showForm()}
        </div>
    )
}

export default ReturningBusiness;