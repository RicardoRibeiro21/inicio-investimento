import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 70vh;        
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;


export const H1 = styled.h1`
    color: #6F08A6;
    font-weight: bold;
    font-size: 2.5em;
`


export const Input = styled.input`
    width: 60%;
    height: 7%;    
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;    
    font-size: 1.5em;
    text-align: center;
    &:focus,
    &:active {
    outline: none;
    box-shadow: none;        
}
`;

export const Select = styled.select`
    width: 60%;
    height: 7%;    
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;   
    font-size: 1.5em; 
    &:focus,
    &:active {
    outline: none;
    box-shadow: none;    
    font-size: 1em; 
    
}
`;

export const Label = styled.label`
    font-size: 1.5em;
    width: 60%;    
`

export const Button = styled.button`
    width: 35%;
    height: 7%;
    border: 1px solid #333;
    border-radius: .25rem ;
    color: #fff;
    background: #333;
    cursor: pointer;
    font-size: 1.5em;
    // &:active {
    //     outline: none;
    //     box-shadow: none;        
    // }
`;

