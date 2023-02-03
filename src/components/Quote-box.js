import React, { useEffect, useState, useRef } from 'react';
import '../stylesheets/Quote-box.css';
import Button from './Button.js'
import QuoteText from './Quote-text';
import Author from './Author';
import {AiOutlineTwitter} from 'react-icons/ai';

function QuoteBox() {

    const [quote, setQuote] = useState("\"Bulba, bulba, bulbasaur!\"");
    const [author, setAuthor] = useState("Bulbasaur");
    let DATA;

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
          .then(function(response) {
                return response.json();
            })
          .then(function(data) {
            DATA = data;
          })
      });

    const handleClick = () => {
        let randomQuote = Math.floor(Math.random() * (DATA.length -1)) + 1;
        setQuote(`"${DATA[randomQuote].text}"`);
        setAuthor(DATA[randomQuote].author);
        };

    return (
        <div className='quote-box' id='quote-box'>
            <QuoteText 
            quote={quote}
            />
            <Author 
            author={author}
            />
            <Button 
            handleClick={handleClick}
            />
            <a id='tweet-quote' href='twitter.com/intent/tweet' target='_top'><AiOutlineTwitter className='tweet-icono'/></a>
        </div>
    );
};

export default QuoteBox;
