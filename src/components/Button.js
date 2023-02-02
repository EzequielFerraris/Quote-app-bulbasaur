import React from 'react';
import '../stylesheets/Button.css';


function Button({ handleClick }) {

    return (
        <div 
        className='quote-button'
        id='new-quote'
        onClick={handleClick}>
        Another Bulba-quote!
        </div>
    );
}

export default Button;