import React, { FC } from 'react';
import { List, ListItem, ListSubheader } from '@lumx/react';

import { Comic, ComicDate, ComicPrice } from 'types/ComicsApi.types';

interface Props {
  comics: Comic[];
}

function renderDates(dates: ComicDate[]): JSX.Element {
  return (
    <>
      {dates.map((date) => (
        <>
          {date.digitalDate && <ListItem>Digital: {date.digitalDate}</ListItem>}
          {date.printDate && <ListItem>Print: {date.printDate}</ListItem>}
        </>
      ))}
    </>
  );
}

function renderPrices(prices: ComicPrice[]): JSX.Element {
  return (
    <>
      {prices.map((price) => (
        <>
          {price.digitalPrice && <ListItem>Digital: {price.digitalPrice}</ListItem>}
          {price.printPrice && <ListItem>Print: {price.printPrice}</ListItem>}
        </>
      ))}
    </>
  );
}

const ListComics: FC<Props> = ({ comics }) => (
  <List>
    {comics.map((comic) => (
      <>
        <ListItem><h4 className="lumx-typography-subtitle2">{comic.title}</h4></ListItem>
        <ListSubheader>Dates</ListSubheader>
        {renderDates(comic.dates)}
        <ListSubheader>Prices</ListSubheader>
        {renderPrices(comic.prices)}
      </>
    ))}
  </List>
);

export default ListComics;