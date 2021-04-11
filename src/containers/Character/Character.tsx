import React, { FC } from 'react';
import { FlexBox, Message, MessageKind, Size, Avatar } from '@lumx/react';

import { useMarvelCharacter } from 'hooks/useMarvelCharacter';
import Loading from 'components/Loading/Loading';
import ListUrls from 'containers/Character/ListUrls/ListUrls';

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
        <FlexBox>
          <article>
            <h1 className="lumx-typography-display1">{character?.name}</h1>
            <p className="lumx-typography-body2">{character?.description}</p>
            <div>
              <h2 className="lumx-typography-title">More details</h2>
              <ListUrls urls={character.urls} />
            </div>
          </article>
          <aside>
            <Avatar
              size={Size.xxl}
              image={character.thumbnail}
            />
            <div>
              <h3 className="lumx-typography-title">Latest comics</h3>
              {character?.comics.items.map((comic) => (
                <ul>
                  <li><h4 className="lumx-typography-subtitle2">{comic.title}</h4></li>
                  {comic.dates.map((date) => (
                    <>
                      <li>Digital date: {date.digitalDate}</li>
                      <li>Print Date: {date.printDate}</li>
                    </>
                  ))}
                  {comic.prices.map((price) => (
                    <>
                      <li>Digital price: {price.digitalPrice}</li>
                      <li>Print price: {price.printPrice}</li>
                    </>
                  ))}
                </ul>
              ))}
              <p>Availables: {character?.comics.available}</p>
            </div>
          </aside>
        </FlexBox>
      )}
    </section>
  );
}

export default Character;
