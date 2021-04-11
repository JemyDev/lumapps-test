import React, { FC } from 'react';
import { List, ListItem, Link } from '@lumx/react';

import { CharacterUrl } from 'types/CharactersApi.types';

interface Props {
  urls: CharacterUrl[];
}

const ListUrls: FC<Props> = ({ urls }) => (
  <List>
    {urls.map((url) => (
      <>
        {url.detail && <ListItem><Link href={url.detail} target="_blank">Detail</Link></ListItem>}
        {url.wiki && <ListItem><Link href={url.wiki} target="_blank">Wiki</Link></ListItem>}
        {url.comicLink && <ListItem><Link href={url.comicLink} target="_blank">Comic link</Link></ListItem>}
      </>
    ))}
  </List>
);

export default ListUrls;
