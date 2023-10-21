import React from 'react';
import { useLocation, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const Child = () => {
	const { name } = useParams();
	const location = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();
	const id = searchParams.get('id');
	const mode = searchParams.get('mode');

	return (
		<div>
			<div>Child</div>
			<button
				onClick={() => {
					searchParams.set('sort', 'clear');
					setSearchParams(searchParams);
				}}
			>
				Click!
			</button>
		</div>
	);
};

export default Child;
