import renderMoviesList from './controller/moviesList-controller.js';
import { showFavorite } from './render-favorite-movie.js'
import chooseLanguage from './language-select.js'
import searchMovie from './controller/movieSearched-controller';

renderMoviesList(1, 'pt-BR');
const $showFavorite = document.querySelector('[data-movie="show-favorite"]');
$showFavorite.addEventListener('click', showFavorite);
chooseLanguage();

const $searchInput = document.querySelector('[data-movies="search"]');
const $searchIcon = document.querySelector('[data-movies="searchIcon"]');
const $moviesList = document.querySelector('[data-movies="list"]');
const $pagination = document.querySelector('[data-movies="pagination"]');

$searchInput.addEventListener('keyup', function(e) {
  if (e.key === 'Enter') {
    const movieName = this.value;
    if (movieName.length !== 0) searchMovie(movieName, $moviesList, $pagination, this);
  }
});

$searchIcon.addEventListener('click', function() {
  const movieName = this.parentElement.nextElementSibling.value;
  if (movieName.length !== 0) searchMovie(movieName, $moviesList, $pagination, this);
})
