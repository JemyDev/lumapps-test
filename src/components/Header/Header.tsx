import React, { FC } from 'react';
import { FlexBox, Alignment } from '@lumx/react';
import SearchField from 'components/SearchField/SearchField';
import Logo from 'img/marvel-logo.png';

const Header: FC = () => (
	<header className="lumx-spacing-padding-big header">
		<FlexBox vAlign={Alignment.left}>
			<img src={Logo} alt="Marvel" width={150} />
		</FlexBox>
		<FlexBox vAlign={Alignment.right}>
			<SearchField />
		</FlexBox>
	</header>
);

export default Header;
