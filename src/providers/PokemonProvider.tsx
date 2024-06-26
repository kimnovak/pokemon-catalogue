import { FC, createContext, useContext } from 'react';
import { ReactNode } from '@tanstack/react-router';
import * as api from '../api';
import { Pokemon, PokemonCatalogueItem } from '../types/pokemon';
import { useDataFetcher } from '../hooks/useDataFetcher';

type PokemonContextType = {
  pokemons: PokemonCatalogueItem[];
  isLoading: boolean;
  hasError: boolean;
  getPokemons: () => Promise<void>;
  getPokemonByName: (name: string) => Promise<Pokemon>;
};

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const {
    data: pokemons = [],
    isLoading,
    hasError,
    refetch,
  } = useDataFetcher<PokemonCatalogueItem[]>(
    async () => await api.getPokemons()
  );

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
        getPokemons: refetch,
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
