import { CharactersQueryParams, CharacterResultRaw, CharacterResult } from 'types/CharactersApi.types';
import { ApiResponse } from 'types/Api.types';
import { get } from './index';

type CharactersData = ApiResponse<CharacterResultRaw>;

export const getCharacters = async (params?: CharactersQueryParams): Promise<CharacterResult[]> => {
  const { data: charactersData } = await get<CharactersData>('characters', params);

  return charactersData.data.results.map((character) => ({
    id: character.id,
    description: character.description,
    name: character.name,
    thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
  }));
}
