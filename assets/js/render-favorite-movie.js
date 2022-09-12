import { favoriteMovies } from "./favorite-movie.js";
import renderMoviesList from "./controller/moviesList-controller.js";
import { renderMovie } from './render-movie.js';
import { clientApi } from "./service/client-api.js";
import { pagination } from "./pagination.js";

const $pagination = document.querySelector('[data-movies="pagination"]');

let checked = false;

const moviesList = document.querySelector('[data-movies="list"]');

export const showFavorite = async () => {
  checked = !checked;
  pagination.removePagination($pagination);
  const $language = document.querySelector('.nice-select');
  const language = $language.children[0].innerHTML;
  $language.classList.add('inactive');
  
  if (checked) {
    if (favoriteMovies.length === 0) {
      moviesList.innerHTML = '<p class="warning">Você não possui filmes favoritados</p>';
    } else {
      moviesList.innerHTML = '';
      favoriteMovies.forEach(async (item) => {
          const response = await clientApi.getFavoriteMovie(item);
          response.isFavorite = true;
          renderMovie(response);
      })
    }
      
  } else {
    moviesList.innerHTML = '';
    $language.classList.remove('inactive');
    if (language === 'Português') renderMoviesList(1, 'pt-BR');
    else if (language === 'English') renderMoviesList(1, 'en-US');
  }
}
