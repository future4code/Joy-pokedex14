import React, {  useState,useEffect} from 'react';
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

       
        <button onClick={vaParaPokedex}>Vá para a Pokedex</button>  


        <h1>Lista de Pokemons</h1>

        {pokemon.map((poke)=>{
          return (

            
            <p key={poke.name} >{poke.name}</p>
           
          
            /* <img src={data.sprites["front_default"]}/> */
            
          )
        })}

        </SecaoPokemons>
    );
}