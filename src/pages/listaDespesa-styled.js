import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;        
    display: flex;
    flex-direction: column;
    align-items: center;    
`;


export const H1 = styled.h1`
    color: #6F08A6;
    font-weight: bold;
    font-size: 2.5em;
`


export const List = styled.div`
    width: 95%;
    height: 95%;        
    display: flex;
    flex-direction: column;         
`;

export const Month = styled.div`     
    width: 100%;            
    padding-top: 40px;
    
`
export const MonthName = styled.label`
    font-size: 1.7em;    
    color: #6F08A6;      
    font-weight: bold;
    margin-left: 10%;
`

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 50px;
    align-items: center;
`

export const Props = styled.p`
    font-size: 1.5em;        
    text-align: center;    
`
export const TotValue = styled.p`
    font-size: 1.5em;
    width: 100%;      
    color: #6F08A6;      
    text-align: center;    
`

export const BtnRemover = styled.button`
    width: 12%;    
    height: 2em;
    border: none;
    border-radius: .25rem ;
    color: #fff;
    background: #F2433D;
    cursor: pointer;        
`;

export const BtnBack = styled.button`
    width: 40%;  
    height: 3em;  
    border: none;
    border-radius: .25rem ;
    color: #fff;
    background: #333;
    cursor: pointer;
    font-size: 1.5em;
    position: fixed;
    bottom: 30px;

    // &:active {
    //     outline: none;
    //     box-shadow: none;        
    // }
`;

