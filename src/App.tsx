import { Outlet } from '@tanstack/react-router';

export const App = () => {
  return (
    <>
      <header></header>
      <main className="bg-background">
        <Outlet />
      </main>
    </>
  );
};

export default App;
