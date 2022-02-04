import React, {  useState,useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
// import {PokeDex} from './components/PokeDex'

const SecaoPokemons = styled.div`
display:flex;
flex-direction:column;
align-items:center;

`
export const Home = () => {

    const history = useHistory()
  
        const vaParaHome = ()=>{
        history.push("/home");
        }
        
        const vaParaPokedex = ()=>{
        history.push("/pokedex");
        }

    const [pokemon, setPokemon] = useState([])
  
    useEffect(() => { pegarPokemons()}, [])
  
    const pegarPokemons = async () => {
  
      await
        axios.get('https://pokeapi.co/api/v2/pokemon/')
          .then((res) => {
            console.log(res.data.results)
            setPokemon(res.data.results)

          }).catch((err) => {
            console.log(err.response)
          })
    }
      
    return (
        
        <SecaoPokemons>

        {/* <button onClick={vaParaHome}>Vá para a Home</button> */}
        <button onClick={vaParaPokedex}>Vá para a PokeDex</button>  


        <h1>Lista de Pokemons</h1>

        {pokemon.map((poke)=>{

            <p key={pokemon.name} >{pokemon.name}</p>

            
        })}

        </SecaoPokemons>
    );
}