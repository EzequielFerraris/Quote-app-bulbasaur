import React from 'react';
import '../stylesheets/Quote-box.css';
import Button from './Button.js'
import { useState } from 'react';
import QuoteText from './Quote-text';
import Author from './Author';
import {AiOutlineTwitter} from 'react-icons/ai';

function QuoteBox() {

    const [quote, setQuote] = useState("\"Bulba, bulba, bulbasaur!\"");
    const [author, setAuthor] = useState("Bulbasaur");

    const handleClick = () => {
        fetch("https://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
        let fullQuotes = data;
        let randomQuote = Math.floor(Math.random() * 1644) + 1;
        setQuote(`"${fullQuotes[randomQuote].text}"`);
        setAuthor(fullQuotes[randomQuote].author);
        });
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
            <a id='tweet-quote' href='twitter.com/intent/tweet'><AiOutlineTwitter className='tweet-icono'/></a>
        </div>
    );
};

export default QuoteBox;