import { CharactersQueryParams } from 'types/CharactersApi.types';
import { get } from './index';

export const getCharacters = async (params?: CharactersQueryParams) => {
  return await get('characters', params);
}
