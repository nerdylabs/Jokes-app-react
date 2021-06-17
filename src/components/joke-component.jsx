import React from 'react';

const JokeText=(props)=>(
    <div class="quote-text">
        <i class="fas fa-quote-left"></i>

        <span id="quote">{props.children}</span>
    </div>
)

export default JokeText;