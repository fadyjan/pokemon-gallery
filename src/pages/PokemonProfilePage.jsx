import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import modules from "./PokemonProfilePage.module.css";
import PokemonProfileTabs from "../components/PokemonProfileTabs/PokemonProfileTabs";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import axios from "axios";

import Button from '@mui/material/Button';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";



const PokemonProfilePage = () => {
  const [selectedPokemon, setSelectedPokemon] = useState();

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setSelectedPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <>
     <Link to={`/`}>

     <Button variant="contained" startIcon={<ArrowBack />}>BACK</Button>

     </Link>

      {selectedPokemon ? (
        <div id={modules.PrfilePageWrapper}>
          <div id={modules.PokemonWrapper}>
            <img
            id={modules.PokemonProfileImg}
              src={selectedPokemon.sprites.other.dream_world.front_default}
            ></img>
            <div id={modules.PokemonInfoWrapper}>
              <h1>{selectedPokemon.name}</h1>
              <div id = {modules.abilities}>
                {selectedPokemon.types.map((type) => (
                  <span key={type.type.name}>{type.type.name}</span>
                ))}
              </div>
            </div>
          </div>
          <PokemonProfileTabs selectedPokemon ={selectedPokemon}></PokemonProfileTabs>
        </div>
      ) : (
        <LoadingSpinner></LoadingSpinner>
      )}
    </>
  );
};

export default PokemonProfilePage;
