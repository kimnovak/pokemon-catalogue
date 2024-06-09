import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import * as api from '../../api';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import { LoadingSpinner } from '../../ui/LoadingSpinner/LoadingSpinner';

type PokemonCatalogueItem = {
  name: string;
  url: string;
};

export const PokemonCatalogue = () => {
  const [pokemons, setPokemons] = useState<PokemonCatalogueItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { results, updateQuery, searchQuery } =
    useSearchQuery<PokemonCatalogueItem>({
      dataSet: pokemons,
      criteria: 'name',
    });

  const getPokemons = async () => {
    setHasError(false);
    setIsLoading(true);
    try {
      const result = await api.getPokemons();
      setPokemons(result);
    } catch (e) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-md mx-auto mt-4 p-4 bg-white rounded-lg shadow-lg flex justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (hasError || !pokemons.length) {
    return (
      <div className="max-w-md mx-auto mt-4 p-4 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
        All Pokémon are currently sleeping, try again to wake them up!
        <button
          className="bg-primary rounded text-white px-6 py-2 flex mt-2 hover:opacity-90"
          onClick={getPokemons}
        >
          RETRY
        </button>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-4/6 mt-4">
      <h2 className="text-2xl font-bold mb-2 text-center">
        Welcome to Pokémon Catalogue
      </h2>
      <div className="text-md mb-6 text-center">
        Start by selecting a Pokémon from the list
      </div>
      <div className="flex items-center border-b border-b-2 border-primary py-2 mb-4">
        <input
          type="search"
          value={searchQuery}
          onChange={e => updateQuery(e.target.value)}
          placeholder="Search Pokémon by name"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
      </div>
      {results.length ? (
        <ul>
          {results.map(pokemon => (
            <li
              key={pokemon.name}
              className="bg-white font-m my-2 rounded hover:opacity-70"
            >
              <Link to={`/pokemon/${pokemon.name}`}>
                <div className="p-4">{pokemon.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-l mb-6 text-center">
          We couldn't find a Pokémon with that name, try with different one!
        </div>
      )}
    </div>
  );
};
