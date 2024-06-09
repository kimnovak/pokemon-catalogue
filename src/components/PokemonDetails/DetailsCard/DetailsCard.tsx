import { Pokemon } from '../../../types/pokemon';
import {
  adaptAbilitiesForRender,
  adaptTypesForRender,
} from '../../../utils/adapters';

export const DetailsCard: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  const abilities = adaptAbilitiesForRender(pokemon.abilities);
  const types = adaptTypesForRender(pokemon.types);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-center capitalize">{pokemon.name}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-64 h-64 mx-auto mb-4"
      />
      <div className="text-lg">
        <p>
          <strong>ID:</strong> {pokemon.id}
        </p>
        <p>
          <strong>Type:</strong> {types}
        </p>
        <p>
          <strong>Abilities:</strong> {abilities}
        </p>
        <p>
          <strong>Height:</strong> {pokemon.height / 10} m
        </p>
        <p>
          <strong>Weight:</strong> {pokemon.weight / 10} kg
        </p>
        <p>
          <strong>Bulbapedia:</strong>{' '}
          <a
            href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            https://bulbapedia.bulbagarden.net/wiki/{pokemon.name}
          </a>
        </p>
      </div>
    </>
  );
};
