import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { FlexBox, Message, MessageKind, Size, Avatar, Alignment, Link, Orientation } from '@lumx/react';

import { useMarvelCharacter } from 'hooks/useMarvelCharacter';
import Loading from 'components/Loading/Loading';
import ListUrls from 'containers/Character/ListUrls/ListUrls';
import ListComics from 'containers/Character/ListComics/ListComics';
import './character.scss';

const Character: FC = () => {
  const { character, error, loading } = useMarvelCharacter();
  const history = useHistory();
  // const querySearchTerm = useSearchTerm();

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
    <section className="lumx-spacing-padding-horizontal-huge">
      {loading || !character ? (
        <Loading />
      ) : (
        <FlexBox
          className="lumx-spacing-margin-top-huge"
          hAlign={Alignment.top}
          vAlign={Alignment.center}
          orientation={Orientation.horizontal}
          wrap
        >
          <article className="character-content lumx-spacing-margin-right-huge">
            <Link onClick={onClickBack}>Back to result</Link>
            <h1 className="lumx-typography-display1 lumx-spacing-margin-vertical-huge">{character?.name}</h1>
            <p className="lumx-typography-body2">{character?.description}</p>
            <div className="lumx-spacing-margin-top-huge">
              <h2 className="lumx-typography-title">More details</h2>
              <ListUrls urls={character.urls} />
            </div>
          </article>
          <aside className="character-profile" style={{ maxWidth: 400 }}>
            <FlexBox vAlign={Alignment.center}>
              <Avatar
                size={Size.xxl}
                image={character.thumbnail}
                className="lumx-spacing-margin-bottom-huge"
                alt={character.name}
              />
            </FlexBox>
            <div>
              <h3 className="lumx-typography-title" style={{ textAlign: 'center' }}>Latest comics</h3>
              <ListComics comics={character.comics.items} />
              <p>Availables: {character.comics.available}</p>
            </div>
          </aside>
        </FlexBox>
      )}
    </section>
  );

  function onClickBack() {
    history.goBack();
  }
}

export default Character;
