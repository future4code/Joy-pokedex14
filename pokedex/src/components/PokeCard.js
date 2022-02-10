import React, { useState, useEffect } from "react";
import axios from "axios";

export const PokeCard = (props) => {
  

  
  return (
    
    <div key={props.pokemon.name} >{props.pokemon.name}
          <img/>
          
            
    </div>
  );
};


