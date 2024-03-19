import React, { useState, useEffect } from "react";
import Axios from "axios";

import PokemonCard from "./PokemonCard";

type Pokemon = {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
};

type Props = {};

const Pokedex: React.FC<Props> = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await Axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        const { results } = response.data;

        const pokemonDataPromises = results.map(
          async (result: { name: string; url: string }) => {
            const pokemonResponse = await Axios.get(result.url);
            return pokemonResponse.data;
          }
        );

        const pokemonData = await Promise.all(pokemonDataPromises);

        setPokemonList(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemons();
  }, []);

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-4 py-3 mx-2 my-3">
      <div className="my-4">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
