/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { PokemonContext } from './PokemonContext';
import axios from 'axios';
export const PokemonProvider = ({ children }) => {

  const [pokemonList, SetPokemonList] = useState([]);
  const [currentPageUrl, SetCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=6");

  const [nextPageUrl, SetNextPageUrl] = useState("");
  const [previousPageUrl, SetPreviousPageUrl] = useState("");

  useEffect(() => {
    //To get Some Pokemons genral Profile info
    axios
      .get(currentPageUrl)
      .then((response) => {
        SetNextPageUrl(response.data.next)
        SetPreviousPageUrl(response.data.previous)
        const data = response.data.results;
        const dataDetails = [];

        //Take Pokemon profile url from the previous call then make new call to get detailed information about each one
        data.map((pokemon) => {
          axios.get(`${pokemon.url}`).then((res) => {
            dataDetails.push(res.data);
            // Update the state after all the data is fetched
            if (data.length === dataDetails.length) {
              SetPokemonList(dataDetails);
            }
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });


  }, [currentPageUrl]);

  function goToNextPage(){
    SetCurrentPageUrl(nextPageUrl)

  }
  function goToPreviousPage(){
    SetCurrentPageUrl(previousPageUrl)

  }

  return (
    <PokemonContext.Provider
        value={{
            goToPreviousPage,
            goToNextPage,
            pokemonList,
            previousPageUrl,
        }}
    >
        {children}
    </PokemonContext.Provider>
);

}