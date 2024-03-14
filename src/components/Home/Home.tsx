import { useState, useEffect } from "react";
import HeroImg from "../../img/heroImg.jpg";
import services from "../../services/services";
import PokemonOfTheDay from "./PokemonOfTheDay";

type PokemonOfTheDay = {
  name: string;
  id: number;
  types: [{ type: { name: string } }];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};

const Home: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<PokemonOfTheDay | null>(() => {
    const storedData = localStorage.getItem("pokemonOfTheDay");
    return storedData ? JSON.parse(storedData) : null;
  });

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const data = await services.getPokemonOfTheDay();
        setPokemonData(data);
        localStorage.setItem("pokemonOfTheDay", JSON.stringify(data));
      } catch (error) {
        console.log("Error fetching Pokemon of the day:", error);
      }
    };
    if (!pokemonData) {
      fetchPokemonData();
    }

    const intervalId = setInterval(fetchPokemonData, 24 * 60 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [pokemonData]);

  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="col-span-3 pl-10 bg-[#222831]">
          <div
            style={{
              backgroundImage: `url(${HeroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "cetner",
              backgroundRepeat: "no-repeat",
              minHeight: "80vh",
              position: "relative",
            }}
          ></div>
        </div>
        <div className="pr-10 py-0 bg-[#222831]">
          <div className="bg-[#31363F] text-white min-h-full flex flex-col items-center justify-evenly">
            <p className="text-center font-bold text-lg py-3 px-2">
              Welcome to the Ultimate Pokémon Adventure!
            </p>
            <p className="text-center leading-8 text-md py-3 px-1">
              Discover new regions, catch rare Pokémon, and embark on epic
              adventures in the Pokemon World!
            </p>
            <button className="px-2 py-3 mt-2 bg-blue-600 rounded-lg hover:bg-blue-800 active:bg-white">
              Start Exploring
            </button>
          </div>
        </div>
        <div className="col-span-4 pr-10 py-0">
          <PokemonOfTheDay pokemon={pokemonData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
