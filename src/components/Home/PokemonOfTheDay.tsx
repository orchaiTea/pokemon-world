type Pokemon = {
  name: string;
  id: number;
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

type PokemonOfTheDayProp = {
  pokemon: Pokemon | null;
};

const PokemonOfTheDay: React.FC<PokemonOfTheDayProp> = ({ pokemon }) => {
  return (
    <div className="max-w-fit mx-auto rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4 bg-slate-100">
        <div className="inline-block font-bold text-xl mb-2 px-2 py-3 border-b border-slate-300">
          Pokémon of the Day
        </div>
        {pokemon && (
          <div className="px-2 py-3 flex flex-wrap justify-between">
            <div className="w-1/2">
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
                className="w-full rounded-lg bg-slate-300"
              />
            </div>
            <div className="w-1/2 pl-4">
              <table className="border-collapse border">
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">
                      Index:
                    </td>
                    <td className="border border-slate-300 px-4 py-2">
                      {pokemon.id}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">
                      Name:
                    </td>
                    <td className="border border-slate-300 px-4 py-2">
                      {pokemon.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">
                      Type:
                    </td>
                    <td className="border border-slate-300 px-4 py-2">
                      {pokemon.types[0].type.name}
                    </td>
                  </tr>
                  {/* <tr>
                    <td className="border border-gray-600 px-4 py-2 font-semibold">
                      Abilities:
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      {pokemon.abilities
                        .map((ability) => ability.ability.name)
                        .join(", ")}
                    </td>
                  </tr> */}
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
