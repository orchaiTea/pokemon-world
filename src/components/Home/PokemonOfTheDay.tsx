type Pokemon = {
  name: string;
  types: [{ type: { name: string } }];
  abilities: [{ ability: { name: string } }, { ability: { name: string } }];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};

type POTDProp = {
  pokemon: Pokemon | null;
};

const PokemonOfTheDay: React.FC<POTDProp> = ({ pokemon }) => {
  return (
    <div className="pl-10">
      <div className="bg-gray-100 pl-10 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Pokémon of the Day</h2>
        {pokemon && (
          <div className="flex items-center justify-evenly">
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              className="w-44 h-44 rounded-md mb-4 border-solid border-2 border-sky-500"
            />
            <div className="flex flex-col items-start">
              <p className="px-2 py-3">
                <span className="font-semibold">Name:</span> {""}
                {pokemon.name}
              </p>
              <p className="px-2 py-3">
                <span className="font-semibold">Type:</span> {""}
                {pokemon.types[0].type.name}
              </p>
              <p className="px-2 py-3">
                <span className="font-semibold">Abilities:</span>{" "}
                {pokemon.abilities[0].ability.name},{" "}
                {pokemon.abilities[1].ability.name}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonOfTheDay;
