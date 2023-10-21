import axios from 'axios';

export const getAllCountries = async () => {
	console.log('getAllCountries');
	const { data } = await axios('https://restcountries.com/v3.1/all');
	return data;
};
