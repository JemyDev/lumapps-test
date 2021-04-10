import { getCharacters } from 'api/characters';
import React, { useState } from 'react';

import { Character } from 'types/CharactersApi.types';

interface Hook {
  searchCharacters: (inputValue: string) => Promise<void>;
  characters: Character[] | null;
  error: any;
}

export const useMarvelCharacters = (): Hook => {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const searchCharacters = async (inputValue: string) => {
    setError(null);

    try {
      const characters = await getCharacters({ nameStartsWith: inputValue });
      setCharacters(characters);
    } catch (error) {
      setError(error);
    }
  }

  return { searchCharacters, characters, error };
};
