import { FlexBox, Avatar, Size, Alignment, Orientation, Button } from '@lumx/react';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Character } from 'types/CharactersApi.types';

interface Props {
  character: Character;
}

const CharacterCard: FC<Props> = ({ character }) => {
  const history = useHistory();

  return (
    <FlexBox
      vAlign={Alignment.left}
      gap='big'
      className="character-card lumx-spacing-margin-vertical-huge"
    >
      <Avatar
        className="lumx-spacing-margin-right-huge"
        size={Size.xl}
        image={character.thumbnail}
      />
      <FlexBox hAlign={Alignment.center} orientation={Orientation.vertical}>
        <h2 className="lumx-typography-headline">{character.name}</h2>
        <p className="lumx-typography-body2">{character.description}</p>
        <Button
          style={{ maxWidth: 150 }}
          onClick={onClick}
        >See details</Button>
      </FlexBox>
    </FlexBox>
  );

  function onClick(): void {
    history.push(`/character/${character.id}`);
  }
}

export default CharacterCard;
