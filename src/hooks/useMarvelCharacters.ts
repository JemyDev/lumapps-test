import { getCharacters } from 'api/characters';
import { useState } from 'react';

import { Character } from 'types/CharactersApi.types';

interface Hook {
  searchCharacters: (inputValue: string, limit?: number) => Promise<void>;
  characters: Character[] | null;
  error: any;
  loading: boolean;
}

export const useMarvelCharacters = (): Hook => {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const searchCharacters = async (inputValue: string, limit?: number) => {
    setError(null);

    try {
      setLoading(true);
      const characters = await getCharacters({ nameStartsWith: inputValue, limit });

      if (characters.length === 0) {
        setError('Character not found');
      } else {
        setCharacters(characters);
      }

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  return { searchCharacters, characters, error, loading };
};
