import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { FlexBox, Message, MessageKind, Size, Avatar, Alignment } from '@lumx/react';

import { useMarvelCharacter } from 'hooks/useMarvelCharacter';
import Loading from 'components/Loading/Loading';
import ListUrls from 'containers/Character/ListUrls/ListUrls';
import ListComics from 'containers/Character/ListComics/ListComics';
import { Routes } from 'types/Routes.types';

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
    <section className="lumx-spacing-padding-horizontal-huge">
      {loading || !character ? (
        <Loading />
      ) : (
        <FlexBox
          className="lumx-spacing-margin-top-huge"
          hAlign={Alignment.top}
          vAlign={Alignment.center}
        >
          <article className="lumx-spacing-margin-right-huge" style={{ maxWidth: 800 }}>
            <Link
              to={Routes.Search}
            >Back to result</Link>
            <h1 className="lumx-typography-display1 lumx-spacing-margin-vertical-huge">{character?.name}</h1>
            <p className="lumx-typography-body2">{character?.description}</p>
            <div className="lumx-spacing-margin-top-huge">
              <h2 className="lumx-typography-title">More details</h2>
              <ListUrls urls={character.urls} />
            </div>
          </article>
          <aside style={{ maxWidth: 400 }}>
            <Avatar
              size={Size.xxl}
              image={character.thumbnail}
              className="lumx-spacing-margin-bottom-huge"
              alt={character.name}
            />
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
}

export default Character;
