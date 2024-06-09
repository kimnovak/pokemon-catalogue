import { useParams } from '@tanstack/react-router';

export const PokemonDetails = () => {
  const { pokemonName } = useParams({ from: '/pokemon/$pokemonName' });
  return <div>Hello {pokemonName}</div>;
};
