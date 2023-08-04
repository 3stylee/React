import React from 'react';
import ItemList from '../Components/ItemList';
import renderer from 'react-test-renderer';
import { results as mockResults } from '../snapshotTests/mockData';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';

it('displays a circular progress indicator when loading is set to true', () => {
	const tree = renderer.create(
		<ItemList
			results={mockResults}
			loading={true}
			constructURL={jest.fn()}
			initial={false}
		/>
	);

	expect(tree).toMatchSnapshot();
});

it('displays nothing if initial is set to true', () => {
	const tree = renderer.create(
		<ItemList
			results={mockResults}
			loading={false}
			constructURL={jest.fn()}
			initial={true}
		/>
	);

	expect(tree).toMatchSnapshot();
});

it("displays 'Sorry, no results found' if the results length is not greater than 0", () => {
	const tree = renderer.create(
		<ItemList
			results={{}}
			loading={false}
			constructURL={jest.fn()}
			initial={false}
		/>
	);

	expect(tree).toMatchSnapshot();
});

it('displays a 4x3 grid of cards if the results are populated', () => {
	const store = configureStore();

	const tree = renderer.create(
		<Provider store={store}>
			<ItemList
				results={mockResults}
				loading={false}
				constructURL={jest.fn()}
				initial={false}
			/>
		</Provider>
	);

	expect(tree).toMatchSnapshot();
});
