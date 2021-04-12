import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Alignment, FlexBox, Message, MessageKind, Orientation } from '@lumx/react';

import { useMarvelCharacters } from 'hooks/useMarvelCharacters';
import CharacterCard from 'containers/Search/CharacterCard/CharacterCard';
import Loading from 'components/Loading/Loading';
import './search.scss';

const Search: FC = () => {
	const { searchCharacters, characters, error, loading } = useMarvelCharacters();
	const location = useLocation();


	useEffect(() => {
		const fetchCharacters = async (searchTerm: string) => {
			await searchCharacters(searchTerm, 4);
		}

		const params = new URLSearchParams(location.search);
		const searchTerm = params.get('searchTerm');

		if (searchTerm) {
			fetchCharacters(searchTerm);
		}

	}, [location.search]);

	if (error) {
		return (
			<section className="lumx-spacing-padding-horizontal-huge">
				<Message
					kind={MessageKind.error}
					hasBackground
				>
					<p>{error}</p>
				</Message>
			</section>
		);
	}

	return (
		<FlexBox
			className="lumx-spacing-padding-horizontal-huge"
			vAlign={Alignment.center}
		>
			{loading ? (
				<Loading />
			) : (
				<FlexBox
					className="characters-list"
				>
					<h1 className="lumx-spacing-margin-vertical-huge lumx-typography-display1">Characters list</h1>
					{characters?.map((character) => (
						<CharacterCard
							key={character.id}
							character={character}
						/>
					))}
				</FlexBox>
			)}
		</FlexBox>
	);
}

export default Search;
