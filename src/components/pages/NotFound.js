import React from 'react';

const yellowButton = {
    backgroundColor:'#e1ad00',
    fontFamily: 'Bebas Neue, tahoma',
    letterSpacing: '4px',
    border: 'none'
  }

const NotFound = () => {
   return (
        <div className='text-center'style={{paddingTop:'100px'}}>
          <h1 className='display-2'>Oops! Something went wrong!</h1>
          <br/>
          <a href='/'><button style={yellowButton}>Go Back to Homepage</button></a>
        </div>
      )
}

export default NotFound;