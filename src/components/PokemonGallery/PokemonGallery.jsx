/* eslint-disable no-unused-vars */
import {useContext } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { PokemonContext } from '../../context/PokemonContext';

import modules from "./PokemonGallery.module.css";

const PokemonGallery = () => {
  const {pokemonList} =useContext(PokemonContext);
  return (
    <div id={modules.PokemonWrapper}>
      {pokemonList.length > 0 ? (
        pokemonList.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} key={pokemon.id}></PokemonCard>;
        })
      ) : (
        <LoadingSpinner></LoadingSpinner>
      )}


    </div>
  );
};

export default PokemonGallery;
