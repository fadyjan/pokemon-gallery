/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { PokemonContext } from './PokemonContext';
import axios from 'axios';
export const PokemonProvider = ({ children }) => {
  const [originalPokemonList,filteredData] = useState ([])
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
              filteredData(dataDetails)
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

  function getPokemonBySearch(searchTerm){
    console.log("SearchTerm", searchTerm);
    searchTerm= searchTerm.toLowerCase();
    const filteredData = originalPokemonList.filter((record) => {
      //if no input the return the original
      if (searchTerm === "") {
        return record;
      } else {
        console.log(record.name.toLowerCase().includes(searchTerm))
        return record.name.toLowerCase().includes(searchTerm);
      }
    });
    SetPokemonList(filteredData)
    console.log(filteredData);
    return filteredData
  }

  return (
    <PokemonContext.Provider
        value={{
            goToPreviousPage,
            goToNextPage,
            pokemonList,
            previousPageUrl,
            getPokemonBySearch,
        }}
    >
        {children}
    </PokemonContext.Provider>
);

}