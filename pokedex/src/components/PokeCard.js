import React, { useState, useEffect } from "react";
import axios from "axios";

export const PokeCard = (props) => {
  

  console.log(props.pokemon)
  return (
    
    <> 
    
    {
    props.pokemon &&
    
    <div key={props.pokemon.name} >{props.pokemon.name}
   
    <img src={props.pokemon.sprites.front_default}></img>

       
    </div> }
    </>
  );
};


