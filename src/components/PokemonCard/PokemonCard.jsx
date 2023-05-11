import PropTypes from "prop-types";
import  "./PokemonCard.css";
import { Link } from "react-router-dom";

function PokemonCard({pokemon}) {

  function CapitalizeFirstLetter(pokemonName){
   pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
   return pokemonName
  }
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="LinkELement">
      <div className= "cardWrapper">
        <div className="cardImg">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`Pokemon ${pokemon.name}`}
          />
        </div>
        <div className="cardInfo">
          <h3>{CapitalizeFirstLetter(pokemon.name)}</h3>
          <div className="cardTypesContainer">
            {pokemon.types.map((type) => (
              <label className={type.type.name +" typeSpan"} key={type.type.name}>{CapitalizeFirstLetter(type.type.name)}</label>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sprites: PropTypes.object.isRequired,
    types: PropTypes.array.isRequired,
  }).isRequired,
};
export default PokemonCard;
