import { clientApi } from '../service/client-api.js';
import { renderMovie } from '../render-movie.js';
import { favoriteMovies } from '../favorite-movie.js';
import { pagination } from '../pagination.js';


const renderMoviesList = async (page, language) => {
  const $moviesList = document.querySelector('[data-movies="list"]');
  $moviesList.innerHTML = '';
  const response = await clientApi.getMovies(page, language);
  const movies = response.results;
  const $pagination = document.querySelector('[data-movies="pagination"]');
  const pagesLi = Array.from($pagination.children[0].children); 
  const pages = pagesLi.map(pageLi => pageLi.children[0]);

  movies.forEach(movie => {
    if (favoriteMovies.length > 0) {
      movie.isFavorite = favoriteMovies.includes(movie.id.toString());
    } 
    renderMovie(movie);
  }); 

  pagination.addPagination($pagination, page, pages, language)
}

export default renderMoviesList;
