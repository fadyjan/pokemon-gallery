/* eslint-disable no-unused-vars */
import {useContext } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { PokemonContext } from '../../context/PokemonContext';

import modules from "./PokemonGallery.module.css";
import Pagination from "../Pagination/Pagination";

const PokemonGallery = () => {
  const { goToPreviousPage, goToNextPage, pokemonList,previousPageUrl } =useContext(PokemonContext);
  return (
    <div id={modules.PokemonWrapper}>
      {pokemonList.length > 0 ? (
        pokemonList.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} key={pokemon.id}></PokemonCard>;
        })
      ) : (
        <LoadingSpinner></LoadingSpinner>
      )}

      <Pagination goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage} previousPageUrl = {previousPageUrl}></Pagination>

    </div>
  );
};

export default PokemonGallery;
