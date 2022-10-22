import React from 'react';

interface Blocks {
    type: string;
    body?: string;
    placeholder?: string;
}

const Input = function({type, placeholder}: Blocks) {
    return (
        <div>
            <input type={type} placeholder={placeholder}>
            </input>
        </div>
    )
}

export default Input;