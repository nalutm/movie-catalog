import { apiKey } from "../../../environment/api-key.js";

const error = (err, msgError) => {
  console.log(err);
  alert('Desculpe, ocorreu um erro! Tente novamente mais tarde');
  throw new Error(msgError);
}

const getMovies = async (page, country) => {
  try {
    const movies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${country}&page=${page}`);
    const moviesJSON = await movies.json();
    return moviesJSON;
  } catch (err) {
    error(err, 'Não foi possível listar os filmes');
  }
}

const getMoviesSearched = async (movieName) => {
  try {
    const movieSearched = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${movieName}&page=1&include_adult=false`);
    const movieJSON = await movieSearched.json();
    return movieJSON;
  } catch(err) {
    error(err, 'Não foi possível listar o filme pesquisado');
  }
}

const getFavoriteMovie = async (id) => {
  try {
    const favoriteMovie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`);
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
