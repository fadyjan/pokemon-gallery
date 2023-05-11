import PokemonGallery from "../components/PokemonGallery/PokemonGallery";
import { useContext } from "react";
import Pagination from "../components/Pagination/Pagination";
import { PokemonContext } from "../context/PokemonContext"

const HomePage = () => {
  const { goToPreviousPage, goToNextPage,previousPageUrl } =useContext(PokemonContext);

  return (
    <>
      <PokemonGallery></PokemonGallery>
      <Pagination goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage} previousPageUrl = {previousPageUrl}></Pagination>
    </>
  );
};

export default HomePage;
