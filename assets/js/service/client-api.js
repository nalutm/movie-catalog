import { apiKey } from "../../../environment/api-key.js";

const error = (err, msgError) => {
  console.log(err);
  alert('Desculpe, ocorreu um erro! Tente novamente mais tarde');
  throw new Error(msgError);
}

const getMovies = async (page, language) => {
  try {
    const movies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${language}&page=${page}`);
    const moviesJSON = await movies.json();
    return moviesJSON;
  } catch (err) {
    error(err, 'Não foi possível listar os filmes');
  }
}

const getMoviesSearched = async (movieName, language) => {
  try {
    const movieSearched = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${language}&query=${movieName}&page=1&include_adult=false`);
    const movieJSON = await movieSearched.json();
    return movieJSON;
  } catch(err) {
    error(err, 'Não foi possível listar o filme pesquisado');
  }
}

const getFavoriteMovie = async (id, language) => {
  try {
    const favoriteMovie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=${language}`);
    const favoriteMovieJSON = await favoriteMovie.json();
    return favoriteMovieJSON;
  } catch(err) {
    error(err, 'Não foi possível listar os filmes favoritos');
  }
}

export const clientApi = {
  getMovies,
  getMoviesSearched,
  getFavoriteMovie
}
