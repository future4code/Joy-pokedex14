import React, {useState,useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios';
import {useHistory} from 'react-router-dom';

export const Pokedex = () => {

    const history = useHistory()
  
    const vaParaHome = ()=>{
    history.push("/");
    }
   
    // const [pokemon, setPokemon] = useState([])
  
    // useEffect(() => { pegarPokemons()}, [])

    return (

        <SecaoPokemons>
             <BotaoEstilizado onClick={()=>history.push('/')}>Volte para a Home</BotaoEstilizado>
        <h1>Pokedex</h1>
       
    
        </SecaoPokemons>
    
    )
}












const BotaoEstilizado=styled.button`
margin-top:25px;
background: #fa9e00;
background-image: -webkit-linear-gradient(top, #fa9e00, #2076ab);
background-image: -moz-linear-gradient(top, #fa9e00, #2076ab);
background-image: -ms-linear-gradient(top, #fa9e00, #2076ab);
background-image: -o-linear-gradient(top, #fa9e00, #2076ab);
background-image: linear-gradient(to bottom, #fa9e00, #2076ab);
-webkit-border-radius: 28;
-moz-border-radius: 28;
border-radius: 28px;
font-family: Courier New;
color: #fcfcfc;
font-size: 20px;
padding: 10px 20px 10px 20px;
text-decoration: none;
cursor:pointer;
&:hover,
&:focus {
  color: yellow;
}
&:active {
  color: white;
}
`

const SecaoPokemons = styled.div`
display:flex;
flex-direction:column;
align-items:center;

`