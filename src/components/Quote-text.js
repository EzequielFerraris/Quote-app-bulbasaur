import React from "react";
import '../stylesheets/Quote-text.css'

function QuoteText({ quote }) {

    return (
        <div className='text' id='text'>{quote}</div>
    );
};

export default QuoteText;