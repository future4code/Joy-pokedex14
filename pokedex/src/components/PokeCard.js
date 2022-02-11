import React, { useState, useEffect } from "react";
import axios from "axios";


export const PokeCard = (props) => {

  return (
    <>
      <div key={props?.pokemon?.name} >
        <p>{props?.pokemon?.name}</p>
        <img src={props?.sprite}></img>
      </div>
    </>
  );
};


