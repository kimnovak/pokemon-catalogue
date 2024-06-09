export type Pokemon = {
  abilities: { ability: { name: string } }[];
  base_experience: number;
  cries: { latest: string; legacy: string };
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: string[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: { name: string; url: string };
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string | null;
    front_default: string;
  };
  stats: any[];
  types: { type: { name: string } }[];
  weight: number;
};
