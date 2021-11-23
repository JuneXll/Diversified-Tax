import React from 'react';
import showForm from '../../showForm';

const paddingTop = {
    paddingTop: 200
}

const NewBusiness = () => {
    return(
        <div style={paddingTop}>
            <h1>New Business Client</h1>
            {showForm()}
        </div>
    )
}

export default NewBusiness;