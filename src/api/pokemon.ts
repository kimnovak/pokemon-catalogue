const API_URL = 'https://pokeapi.co/api/v2';

const DEFAULT_DATA_PER_PAGE_SIZE = 151;

export const getPokemons = async (
  { limit } = { limit: DEFAULT_DATA_PER_PAGE_SIZE }
) => {
  const response = await fetch(`${API_URL}/pokemon?limit=${limit}`);
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  const result = await response.json();
  return result.results;
};

export const getPokemonByName = async (name: string) => {
  const response = await fetch(`${API_URL}/pokemon/${name}`);
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  const result = await response.json();
  return result;
};
