import { createFileRoute } from '@tanstack/react-router';
import { PokemonCatalogue } from '../components/PokemonCatalogue/PokemonCatalogue';

export const Route = createFileRoute('/')({
  component: () => <PokemonCatalogue />,
});
