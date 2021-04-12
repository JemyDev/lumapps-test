import { FlexBox, Avatar, Size, Alignment, Button, Orientation } from '@lumx/react';
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
      className="character-card lumx-spacing-margin-vertical-huge"
      orientation={Orientation.horizontal}
      vAlign={Alignment.left}
    >
      <FlexBox vAlign={Alignment.left}>
        <Avatar
          className="lumx-spacing-margin-right-huge"
          size={Size.xl}
          image={character.thumbnail}
        />
      </FlexBox>
      <FlexBox
        className="character-card-content lumx-spacing-margin-bottom-huge"
        fillSpace
        vAlign={Alignment.left}
        orientation={Orientation.vertical}
      >
        <h2 className="lumx-typography-headline lumx-spacing-margin-bottom-regular">{character.name}</h2>
        <p className="lumx-typography-body2 lumx-spacing-margin-bottom-tiny">{character.description}</p>
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
