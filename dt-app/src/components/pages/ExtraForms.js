import React from 'react';
import showForm from '../../showForm';

const paddingTop = {
    paddingTop: 200
}

const ExtraForms = () => {
    return(
        <div style={paddingTop}>
            <h1 className='display-1'>Extra Forms</h1>
            {showForm()}
        </div>
    )
}

export default ExtraForms;