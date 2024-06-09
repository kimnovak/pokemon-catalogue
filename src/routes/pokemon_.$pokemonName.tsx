import { createFileRoute } from '@tanstack/react-router';
import { PokemonDetails } from '../components/PokemonDetails/PokemonDetails';

export const Route = createFileRoute('/pokemon/$pokemonName')({
  component: () => <PokemonDetails />,
});
