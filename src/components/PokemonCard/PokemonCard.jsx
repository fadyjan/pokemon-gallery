import PropTypes from "prop-types";
import modules from "./PokemonCard.module.css";
import { Link } from "react-router-dom";

function PokemonCard({pokemon}) {
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <div className={modules.cardWrapper}>
        <div className={modules.cardImg}>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`Pokemon ${pokemon.name}`}
          />
        </div>
        <div className={modules.cardInfo}>
          <h3>{pokemon.name}</h3>
          <div className={modules.cardTypes}>
            {pokemon.types.map((type) => (
              <span key={type.type.name}>{type.type.name}</span>
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
