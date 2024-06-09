import { DetailsCard } from './DetailsCard/DetailsCard';
import { LoadingSpinner } from '../../ui/LoadingSpinner/LoadingSpinner';
import { Pagination } from '../../ui/Pagination/Pagination';
import { usePagination } from '../../hooks/usePagination';
import { usePokemonDetails } from '../../hooks/usePokemonDetails';

export const PokemonDetails = () => {
  const { pokemon, isLoading, hasError, refetch } = usePokemonDetails();
  const { handleNext, handlePrevious } = usePagination();

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
          onClick={refetch}
        >
          RETRY
        </button>
      </div>
    );
  }

  return (
    <div
      className={`lg:w-3/6 mx-4 lg:mx-auto mt-4 p-4 bg-white rounded-lg shadow-lg overflow-hidden ${isLoading ? 'opacity-70 pointer-events-none select-none' : ''}`}
    >
      <Pagination handleNext={handleNext} handlePrevious={handlePrevious} />
      <DetailsCard pokemon={pokemon} />
    </div>
  );
};
