import { useParams } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import * as api from '../../api';

type Pokemon = {
    name: string;
    id: string;
}

export const PokemonDetails = () => {
  const { pokemonName } = useParams({ from: '/pokemon/$pokemonName' });
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getPokemonDetails = async () => {
    setHasError(false);
    setIsLoading(true);
    try {
      const result = await api.getPokemonByName(pokemonName);
      setPokemon(result);
    } catch (e) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemonDetails();
  }, []);

  if (isLoading) {
    return 'loading';
  }

  if (hasError || !pokemon) {
    return 'error';
  }

  return <div>Hello {pokemonName} {pokemon.id}</div>;
};
