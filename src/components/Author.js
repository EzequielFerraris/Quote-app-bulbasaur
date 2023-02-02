import React from "react";
import '../stylesheets/Author.css';

function Author({ author }) {

    return (
        <div className='author' id='author'>{ author }</div>
    )
};

export default Author;