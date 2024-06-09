import { Outlet } from '@tanstack/react-router';

export const App = () => {
  return (
    <>
      <header></header>
      <main className="bg-blue-500">
        <Outlet />
      </main>
    </>
  );
};

export default App;
