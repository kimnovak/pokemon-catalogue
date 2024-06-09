import { Pokemon } from '../types/pokemon';

export const adaptAbilitiesForRender = (abilities: Pokemon['abilities']) =>
  abilities.map(({ ability: { name } }) => name)?.join(', ');

export const adaptTypesForRender = (abilities: Pokemon['types']) =>
  abilities.map(({ type: { name } }) => name)?.join(', ');
