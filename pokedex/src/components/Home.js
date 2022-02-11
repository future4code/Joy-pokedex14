import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { PokeCard } from './PokeCard';

export const Home = () => {

  const [pokemon, setPokemon] = useState([])
  const [newPoke, setnewPoke] = useState({})

  const history = useHistory()
  const vaParaPokedex = () => {
    history.push("/pokedex");
  }

  useEffect(() => {
    pegarPokemons()
  }, [])

  const pegarPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => {
        setPokemon(res.data.results)
      }).catch((err) => {
        console.log(err.response)
      })
  }

  useEffect(() => {
    pokemon?.forEach((item) => {
      axios.get(item.url).then((res) => {
        setnewPoke(old => ({ ...old, [res.data.name]: res.data }))
      })
    })
  }, [pokemon])

  return (
    <SecaoPokemons>
      <BotaoEstilizado onClick={vaParaPokedex}>Vá para a Pokedex</BotaoEstilizado>
      <h1>Lista de Pokemons</h1>

      <div>
        {pokemon.length && pokemon?.map((item) => {
          console.log(item)
          return (
            <PokeCard
              key={item.name}
              pokemon={item}
              sprite={newPoke[item.name]?.sprites?.front_default}
            />

          )
        })}
      </div>
    </SecaoPokemons>
  );
}














const BotaoEstilizado = styled.button`
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
