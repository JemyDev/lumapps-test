import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCharacter } from 'api/characters';
import { CharacterProfile } from 'types/CharactersApi.types';

interface Hook {
  character: CharacterProfile | null;
  error: string | null;
  loading: boolean;
}

export const useMarvelCharacter = (): Hook => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<CharacterProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCharacter = async () => {
    setError(null);

    try {
      setLoading(true);
      const characterData = await getCharacter(id, 4);
      setCharacter(characterData);
      setLoading(false);
    } catch(error) {
      setError(error.message);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchCharacter();
  }, []);

  return { character, error, loading };
}