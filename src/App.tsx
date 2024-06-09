import { Outlet } from '@tanstack/react-router';
import { Header } from './ui/Header/Header';
import { PokemonProvider } from './providers/PokemonProvider';

export const App = () => {
  return (
    <PokemonProvider>
      <Header />
      <main>
        <Outlet />
      </main>
    </PokemonProvider>
  );
};

export default App;
