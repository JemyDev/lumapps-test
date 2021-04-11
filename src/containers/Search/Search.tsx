import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Alignment, FlexBox, Message, MessageKind, Orientation } from '@lumx/react';

import { useMarvelCharacters } from 'hooks/useMarvelCharacters';
import CharacterCard from 'containers/Search/CharacterCard/CharacterCard';
import Loading from 'components/Loading/Loading';

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
		<section className="lumx-spacing-padding-horizontal-huge">
			{loading ? (
				<Loading />
			) : (
				<FlexBox
					className="characters-list"
					marginAuto={[Alignment.left, Alignment.right]}
					orientation={Orientation.vertical}
				>
					{characters?.map((character) => (
						<CharacterCard
							key={character.id}
							character={character}
						/>
					))}
				</FlexBox>
			)}
		</section>
	);
}

export default Search;
