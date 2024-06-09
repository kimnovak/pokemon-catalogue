import { useEffect, useState } from 'react';
import * as api from '../../api';
import { Link } from '@tanstack/react-router';

type PokemonCatalogueItem = {
  name: string;
  url: string;
};

export const PokemonCatalogue = () => {
  const [pokemons, setPokemons] = useState<PokemonCatalogueItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

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
    return 'loading';
  }

  if (hasError) {
    return 'error';
  }

  return (
    <div className="relative mx-auto w-4/6 mt-4">
      <h2 className="text-2xl font-bold mb-2 text-center">
        Welcome to Pokémon Catalogue
      </h2>
      <div className="text-md mb-6 text-center">
        Start by selecting a Pokémon from the list
      </div>
      <ul>
        {pokemons.map(pokemon => (
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
    </div>
  );
};
