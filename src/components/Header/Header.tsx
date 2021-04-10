import React, { FC } from 'react';
import { FlexBox, Alignment } from '@lumx/react';
import SearchField from 'components/SearchField/SearchField';

const Header: FC = () => (
	<header className="lumx-spacing-padding-big header">
		<FlexBox vAlign={Alignment.right}>
			<SearchField />
		</FlexBox>
	</header>
);

export default Header;
