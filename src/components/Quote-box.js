import React from "react";
import '../stylesheets/Quote-box.css';

function QuoteBox() {

    return (
        <div className='quote-box' id='quote-box'>
            <div className='text' id='text'>Here's a quotes</div>
            <div className='author' id='author'>Bulbasaur</div>
            <div className='quote-button'>Another Bulba-quote!</div>
        </div>
    );

};

export default QuoteBox;