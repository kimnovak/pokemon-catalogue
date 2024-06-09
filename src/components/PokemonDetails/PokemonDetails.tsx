import { useParams } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import * as api from '../../api';
import { Pokemon } from '../../types/pokemon';
import { DetailsCard } from './DetailsCard/DetailsCard';
import { LoadingSpinner } from '../../ui/LoadingSpinner/LoadingSpinner';
import { Pagination } from '../../ui/Pagination/Pagination';

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

  if (isLoading && !pokemon) {
    return (
      <div className="max-w-md mx-auto mt-4 p-4 bg-white rounded-lg shadow-lg flex justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!pokemon || hasError) {
    return (
      <div className="max-w-md mx-auto mt-4 p-4 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
        This Pokémon is currently sleeping, try again to wake it up!
        <button
          className="bg-primary rounded text-white px-6 py-2 flex mt-2 hover:opacity-90"
          onClick={getPokemonDetails}
        >
          RETRY
        </button>
      </div>
    );
  }

  return (
    <div className="lg:w-3/6 mx-4 lg:mx-auto mt-4 p-4 bg-white rounded-lg shadow-lg overflow-hidden">
      <Pagination
        handleNext={() => console.log('next')}
        handlePrevious={() => console.log('previous')}
      />
      <DetailsCard pokemon={pokemon} />
    </div>
  );
};
