import React, { useEffect, useState } from 'react';
import '../stylesheets/Quote-box.css';
import Button from './Button.js'
import QuoteText from './Quote-text';
import Author from './Author';
import {AiOutlineTwitter} from 'react-icons/ai';

function QuoteBox() {

    const [state, setState] = useState();
    const [quote, setQuote] = useState("\"Bulba, bulba, bulbasaur!\"");
    const [author, setAuthor] = useState("Bulbasaur");
    const URL = "https://type.fit/api/quotes";

    const fetchAPI = async () => {
        const response = await fetch(URL);
        const responseJSON = await response.json();
        setState(responseJSON);
    };

    useEffect(() => { fetchAPI() });

    const handleClick = () => {
        let randomQuote = Math.floor(Math.random() * (state.length -1)) + 1;
        setQuote(`"${state[randomQuote].text}"`);
        setAuthor(state[randomQuote].author);
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
