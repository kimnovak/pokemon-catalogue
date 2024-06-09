import { FC, createContext, useContext, useEffect, useState } from 'react';
import { ReactNode } from '@tanstack/react-router';
import * as api from '../api';
import { Pokemon, PokemonCatalogueItem } from '../types/pokemon';

type PokemonContextType = {
  pokemons: PokemonCatalogueItem[];
  isLoading: boolean;
  hasError: boolean;
  getPokemons: () => Promise<void>;
  getPokemonByName: (name: string) => Promise<Pokemon>;
};

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [pokemons, setPokemons] = useState<PokemonCatalogueItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getPokemons = async () => {
    setHasError(false);
    setIsLoading(true);
    try {
      const result = await api.getPokemons();
      setPokemons(result);
    } catch (e) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemonByName = async (name: string) => {
    const result = await api.getPokemonByName(name);
    return result;
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        isLoading,
        hasError,
        getPokemons,
        getPokemonByName,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemons = (): PokemonContextType => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemon must be used within a PokemonProvider');
  }
  return context;
};
