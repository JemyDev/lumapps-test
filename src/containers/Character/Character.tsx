import React, { FC } from 'react';
import { Message, MessageKind } from '@lumx/react';

import { useMarvelCharacter } from 'hooks/useMarvelCharacter';

const Character: FC = () => {
  const { character, error, loading } = useMarvelCharacter();

  if(error) {
    return (
      <Message
        kind={MessageKind.error}
        hasBackground
      >
        <p>{error}</p>
      </Message>
    );
  }

  return (
    <div>{JSON.stringify(character)}</div>
  );
}

export default Character;
