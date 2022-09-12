import { clientApi } from '../service/client-api.js';
import { renderMovie } from '../render-movie.js';
import { favoriteMovies } from '../favorite-movie.js';
import { pagination } from '../pagination.js';

const $moviesList = document.querySelector('[data-movies="list"]');
const $pagination = document.querySelector('[data-movies="pagination"]');
const pages = $pagination.children[0].children;
const $topBtn = document.querySelector('[data-movies="top"]');

window.addEventListener('scroll', (e) => {
  if (window.pageYOffset > 2500) {
    $topBtn.classList.remove('inactive');
    $topBtn.classList.add('active');
  } 
  else $topBtn.classList.remove('active')
})

const renderMoviesList = async (page, language) => {
  $moviesList.innerHTML = '';
  const response = await clientApi.getMovies(page, language);
  const movies = response.results;
  
  movies.forEach(movie => {
    if (favoriteMovies.length > 0) {
      movie.isFavorite = favoriteMovies.includes(movie.id.toString());
    } 
    renderMovie(movie);
  }); 

  pagination.addPagination($pagination, page, pages, language);

}

$pagination.addEventListener('click', (e) => {
  const page = e.target.dataset.page;
  const language = e.target.dataset.language;
  pagination.removePagination($pagination);
  renderMoviesList(page, language);
})

export default renderMoviesList;
