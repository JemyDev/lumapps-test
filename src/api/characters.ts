import { CharactersQueryParams, CharacterResultRaw, Character } from 'types/CharactersApi.types';
import { ApiResponse } from 'types/Api.types';
import { get } from './index';

type CharactersData = ApiResponse<CharacterResultRaw>;

export const getCharacters = async (params?: CharactersQueryParams): Promise<Character[]> => {
  const { data: charactersData } = await get<CharactersData>('characters', params);

  return charactersData.data.results.map((character) => {
    const description = character.description.trim().length > 0 ? character.description : 'No description available';

    return {
      id: character.id,
      description,
      name: character.name,
      thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    }
  });
}
