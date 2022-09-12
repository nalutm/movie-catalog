import { createMoviePoster } from './movie-poster.js';
import { createMovieInfo } from './movie-info.js';
import { createMovieDescription } from './movie-description.js';

const moviesList = document.querySelector('[data-movies="list"]');

export const renderMovie = (movie) => {
  const li = document.createElement('li');
  li.classList.add('movie-card');

  const movieYear = movie.release_date.slice(0,4) || '';

  if (movie.poster_path) li.appendChild(createMoviePoster(`https://image.tmdb.org/t/p/original${movie.poster_path}`));
  li.appendChild(createMovieInfo(movie.title, movieYear, movie.vote_average, movie.isFavorite));
  li.appendChild(createMovieDescription(movie.overview));
  li.setAttribute('id', movie.id);

  moviesList.appendChild(li);
};
