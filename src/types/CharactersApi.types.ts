import { Comic, ComicList } from "types/ComicsApi.types";

export enum CharacterUrlType {
  Detail = 'detail',
  Wiki = 'wiki',
  ComicLink = 'comiclink',
}

export interface CharacterUrl {
  detail?: string;
  wiki?: string;
  comicLink?: string;
}

export interface CharacterUrlsRaw {
  type: CharacterUrlType;
  url: string;
}

export interface CharactersQueryParams {
  name?: string;
  nameStartsWith?: string;
  modifiedSince?: string;
  comics?: number;
  series?: number;
  events?: number;
  stories?: number;
  orderBy?: string;
  limit?: number;
  offset?: number;
}

export interface CharacterResultRaw {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
}

export type CharacterProfileRaw = {
  comics: ComicList;
  urls: CharacterUrlsRaw[];
} & CharacterResultRaw;

export type CharacterProfile = {
  comics: {
    available: number;
    items: Comic[];
  };
  urls: CharacterUrl[];
} & Character;
