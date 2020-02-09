import React from 'react';
import './search-box.styles.css';

{/* richiamo onC e ci metto dentro una fuz che prende il target(cioè il pezzo html in questo caso l'intero input).value (il suo valore) */}
export const SearchBox = ({ placeholder, handleChange }) => (
    <input className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange} /> 
);


