import { Outlet } from '@tanstack/react-router';
import { Header } from './ui/Header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
