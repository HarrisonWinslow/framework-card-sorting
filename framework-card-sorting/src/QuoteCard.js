import React from 'react';
import './Content.css';


function QuoteCard({quote}) {
    return(
        <div className="quote-card">
            {/* Display the quote content */}
            <p>{quote.content}</p>
            {/* Display the author */}
            <p>- {quote.author}</p>
            <p> {quote.situation} </p>
            <p> {quote.location} </p>
            <p> {quote.date} </p>
        </div>
    )
}

export default QuoteCard;