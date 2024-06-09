import { useNavigate, useParams } from '@tanstack/react-router';
import { usePokemons } from '../providers/PokemonProvider';

/**
 * Provides handlers to fetch previous or next Pokemon from the catalogue
 */
export const usePagination = () => {
  const params = useParams({ from: '/pokemon/$pokemonName' });
  const pokemonName = params.pokemonName;
  const { pokemons } = usePokemons();
  const navigate = useNavigate();
  const currentPokemonIndex = pokemons.findIndex(
    pokemon => pokemon.name === pokemonName
  );
  const hasNext = currentPokemonIndex !== pokemons.length - 1;
  const hasPrevious = currentPokemonIndex !== 0;

  const handleNext = () => {
    navigate({
      to: '/pokemon/$pokemonName',
      params: {
        pokemonName: hasNext
          ? pokemons[currentPokemonIndex + 1].name
          : pokemons[0].name,
      },
    });
  };

  const handlePrevious = () => {
    navigate({
      to: '/pokemon/$pokemonName',
      params: {
        pokemonName: hasPrevious
          ? pokemons[currentPokemonIndex - 1].name
          : pokemons[pokemons.length - 1].name,
      },
    });
  };
  return { handleNext, handlePrevious };
};
