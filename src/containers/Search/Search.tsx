import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useMarvelCharacters } from 'hooks/useMarvelCharacters';

const Search: FC = () => {
	const { searchCharacters, characters, error } = useMarvelCharacters();
	const location = useLocation();

	useEffect(() => {
		if (location.state) {
			console.log(location.state);
		}
	}, [location.state]);

	return (
		<section className="lumx-spacing-padding-horizontal-huge" />
	);
}

export default Search;
