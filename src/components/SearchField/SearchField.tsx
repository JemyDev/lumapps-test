import React, { FC, FormEvent, useState } from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';
import { useHistory } from 'react-router-dom';

const SearchField: FC = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const history = useHistory();

	return (
		<form onSubmit={onSubmit}>
			<TextField
				theme={Theme.dark}
				placeholder="Search ..."
				icon={mdiMagnify}
				onChange={onChange}
			/>
		</form>
	);

	function onChange(value: string) {
		setSearchTerm(value);
	}

	function onSubmit(event: FormEvent) {
		event.preventDefault();

		const params = new URLSearchParams();
		if (searchTerm.length > 0) {
			params.append('searchTerm', searchTerm);
		} else {
			params.delete('searchTerm');
		}

		history.push(`/?${params.toString()}`, { searchTerm });
	}
}

export default SearchField;
