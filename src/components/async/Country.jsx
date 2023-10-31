import React from 'react';
import { getAllCountries } from '../../api/country';
import { useQuery } from '@tanstack/react-query';

const Country = () => {
	const { data, isLoading, error } = useQuery(['country'], getAllCountries);
	console.log(data);
	return (
		<>
			{isLoading && <p>Loading...</p>}
			{error && <p>Error ${error}</p>}
			{data &&
				data.map((v) => (
					<li key={v.name.official}>
						<img src={v.flags.png} alt={v.name.official} className="w-12" />
						<p>{v.name.official}</p>
					</li>
				))}
		</>
	);
};

export default Country;
