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
    <div className="max-w-xs grid grid-cols-2 rounded-md border-2 border-gray-500 overflow-hidden shadow-lg">
      <div className="flex justify-start">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-20 h-20 border-r-2 border-gray-500 rounded"
        />
      </div>
      <div className="">
        <p className="font-bold text-xl py-2">{pokemon.name}</p>
        <div className="flex justify-between">
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
