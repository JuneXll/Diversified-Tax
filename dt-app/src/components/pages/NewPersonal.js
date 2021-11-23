import React from 'react';
import showForm from '../../showForm';

const paddingTop = {
    paddingTop: 200
}

const NewPersonal = () => {
    return(
        <div style={paddingTop}>
            <h1>New Personal Clients</h1>
            {showForm()}
        </div>
    )
}

export default NewPersonal;