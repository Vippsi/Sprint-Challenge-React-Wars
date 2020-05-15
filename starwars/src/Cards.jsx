import React, {useState, useEffect} from 'react';
import styled from 'styled-components' 
import Axios from 'axios'




export default  function({data}){
console.log(data)
const StyledCardContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    flex-direction:row;
    padding: 2%;
    max-width: 100%;
`

const StyledCard = styled.div`
font-family: 'Patrick Hand SC', cursive;
display:flex;
flex-direction:column;
flex-wrap:wrap;

background: #2ecc71;
margin:2%;
padding: 1%;

border:5px double black;

img{
    
}
h2 {
    margin: 0;
    font-size: 2rem;
}

p{
    margin: 0;
    font-size: 1.5rem;
    word-wrap:break-word;
}
.location{
    font-size: 1.2rem;
}

`






return(
    <StyledCardContainer>
    {
        data.map((item) => {
            return (
                
                
                    <StyledCard>
                        <h2>{item.name}</h2>
                        <p>Species: {item.species}</p>
                        <p>Gender: {item.gender}</p>
                        <p className= 'location'>Location: {item.location.name}</p>
                        <img src={item.image}/>
                    </StyledCard>
                
            )
        })
    }
    </StyledCardContainer>
)








}