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
    <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4 bg-slate-50">
        <div className="font-bold text-xl mb-2">Pokémon of the Day</div>
        {pokemon && (
          <div className="flex flex-wrap justify-between">
            <div className="w-1/2">
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-1/2 pl-4">
              <table className="border-collapse border border-gray-300">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">
                      Name:
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {pokemon.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">
                      Type:
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {pokemon.types[0].type.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">
                      Abilities:
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {pokemon.abilities
                        .map((ability) => ability.ability.name)
                        .join(", ")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonOfTheDay;
