import {
  CharactersQueryParams,
  CharacterResultRaw,
  Character,
  CharacterProfileRaw,
  CharacterProfile,
  CharacterUrl,
  CharacterUrlsRaw,
  CharacterUrlType,
} from 'types/CharactersApi.types';
import { ApiResponse } from 'types/Api.types';
import { get } from './index';
import { getComics } from './comics';

type CharactersData = ApiResponse<CharacterResultRaw>;
type CharacterProfileData = ApiResponse<CharacterProfileRaw>;

export async function getCharacters(params?: CharactersQueryParams): Promise<Character[]> {
  const { data: charactersData } = await get<CharactersData>('characters', params);

  return charactersData.data.results.map((character) => ({
    id: character.id,
    description: setDescription(character.description),
    name: character.name,
    thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
  }));
}

export async function getCharacter(characterId: string, comicLimit: number): Promise<CharacterProfile> {
  const { data: characterProfileData } = await get<CharacterProfileData>(`characters/${characterId}`, {});

  return characterProfileData.data.results.map(async(character) => {
    const items = await getComics(character.comics.collectionURI, comicLimit);

    return {
      id: character.id,
      name: character.name,
      description: setDescription(character.description),
      thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      comics: {
        available: character.comics.available,
        items,
      },
      urls: parseUrlsCharacters(character.urls),
    }
  })[0];
}

// Utility functions
function parseUrlsCharacters (urls: CharacterUrlsRaw[]): CharacterUrl[] {
  return urls.map((characterUrl) => ({
    detail: characterUrl.type === CharacterUrlType.Detail ? characterUrl.url : undefined,
    wiki: characterUrl.type === CharacterUrlType.Wiki ? characterUrl.url : undefined,
    comicLink: characterUrl.type === CharacterUrlType.ComicLink ? characterUrl.url : undefined,
  }));
}

function setDescription(description: string) {
  return description.trim().length > 0 ? description : 'No description available';
}
