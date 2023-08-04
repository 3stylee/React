import React from 'react';
import renderer from 'react-test-renderer';
import SearchForm from '../Components/SearchForm';

it('should set all filter switches to on if the filters are all set to true', () => {
	const tree = renderer.create(
		<SearchForm
			onClick={jest.fn()}
			filters={{
				Songs: true,
				Artists: true,
				Albums: true,
			}}
			onSearchChanged={jest.fn()}
			onSwitchChanged={jest.fn()}
		/>
	);

	expect(tree).toMatchSnapshot();
});
