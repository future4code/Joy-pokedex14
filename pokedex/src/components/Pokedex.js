import React, {useState,useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const SecaoPokemons = styled.div`
display:flex;
flex-direction:column;
align-items:center;

`

export const Pokedex = () => {

    const history = useHistory()
  
    const vaParaHome = ()=>{
    history.push("/");
    }
   
    // const [pokemon, setPokemon] = useState([])
  
    // useEffect(() => { pegarPokemons()}, [])

    return (

        <SecaoPokemons>
             <button onClick={()=>history.push('/')}>Volte para a Home</button>
        <h1>Pokedex</h1>
       
        {/* <button onClick={() => history.push('/home')}>Voltar para Home</button> */}
        </SecaoPokemons>
    
    )
}