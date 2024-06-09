import { useParams } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import * as api from '../../api';
import { Pokemon } from '../../types/pokemon';
import { DetailsCard } from './DetailsCard/DetailsCard';

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

  return (
    <div className="lg:w-3/6 mx-4 lg:mx-auto mt-4 p-4 bg-white rounded-lg shadow-lg overflow-hidden">
      <DetailsCard pokemon={pokemon} />
    </div>
  );
};
