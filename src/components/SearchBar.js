import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    display: block;
    width: 300px;
    margin: auto;
    margin-bottom:20px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 20px;
`;

const SearchBar = ({update}) => {
    return (
        <div>
            <Input type="text" placeholder='Search' onChange={(e) => {update(e)}}/>
        </div>    
    );  
}

 
 export default SearchBar;