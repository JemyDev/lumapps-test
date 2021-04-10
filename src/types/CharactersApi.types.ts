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
