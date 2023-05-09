const url = 'https://api.themoviedb.org/3/movie/popular?api_key=33d0ea1c781e29e608975e2aefa5b729';

export const getFilms = async () => {

try {
	const response = await fetch(url);
	const result = await response.json();
	console.log('result', result);
	return result.results;
} catch (error) {
	console.error(error);
}
}