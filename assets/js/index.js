import renderMoviesList from './controller/moviesList-controller.js';
import { showFavorite } from './render-favorite-movie.js'
import chooseLanguage from './language-select.js'
import searchMovie from './controller/movieSearched-controller';
import { pagination } from './pagination.js';

const $searchInput = document.querySelector('[data-movies="search"]');
const $searchIcon = document.querySelector('[data-movies="searchIcon"]');
const $moviesList = document.querySelector('[data-movies="list"]');
const $pagination = document.querySelector('[data-movies="pagination"]');
const $showFavorite = document.querySelector('[data-movie="show-favorite"]');
const $checkbox = document.querySelector('[data-movie="show-favorite"]');

renderMoviesList(1, 'pt-BR');
chooseLanguage();

$showFavorite.addEventListener('click', (e) => showFavorite(e));

$searchInput.addEventListener('keyup', function(e) {
  if (e.key === 'Enter') {
    const movieName = this.value;
    if (movieName.length !== 0) {
      $checkbox.classList.remove('input-chk');
      searchMovie(movieName, $moviesList, this);
      pagination.removePagination($pagination);
    } 
  }
});

$searchIcon.addEventListener('click', function() {
  const movieName = this.parentElement.nextElementSibling.value;
  if (movieName.length !== 0) {
    $checkbox.classList.remove('input-chk');
    searchMovie(movieName, $moviesList, this);
    pagination.removePagination($pagination);
  }
})
