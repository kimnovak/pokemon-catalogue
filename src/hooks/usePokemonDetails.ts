import { useEffect } from 'react';
import { useParams } from '@tanstack/react-router';
import { usePokemons } from '../providers/PokemonProvider';
import { Pokemon } from '../types/pokemon';
import { useDataFetcher } from './useDataFetcher';

/**
 * Reads Pokemon name from URL param and fetches details for that Pokemon
 */
export const usePokemonDetails = () => {
  const params = useParams({ from: '/pokemon/$pokemonName' });
  const { getPokemonByName } = usePokemons();
  const {
    data: pokemon,
    isLoading,
    hasError,
    refetch,
  } = useDataFetcher<Pokemon>(() => getPokemonByName(params.pokemonName));

  const handleNameChange = (name: string) => {
    if (!name) {
      return;
    }
    refetch();
  };

  useEffect(() => {
    handleNameChange(params.pokemonName);
  }, [params.pokemonName]);

  return {
    pokemon,
    isLoading,
    hasError,
    refetch,
  };
};
