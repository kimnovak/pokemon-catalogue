import { Outlet } from '@tanstack/react-router';

export const App = () => {
  return (
    <>
        <header>Header</header>
        <main className="bg-blue-500">
          <Outlet />
        </main>
    </>
  );
}

export default App;
