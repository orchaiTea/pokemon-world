import React from "react";

type Pokemon = {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
};

type Props = {
  pokemon: Pokemon;
};

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="image-section">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-full border border-black rounded-md"
        />
      </div>
      <div className="">
        <p className="font-bold text-xl mb-2">{pokemon.name}</p>
        <div className="pokemon-types">
          {pokemon.types.map((type, index) => (
            <span
              key={index}
              className={`type type-${type.type.name.toLowerCase()} inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
