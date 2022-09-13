import { favoriteMovies } from "./favorite-movie.js";
import renderMoviesList from "./controller/moviesList-controller.js";
import { renderMovie } from './render-movie.js';
import { clientApi } from "./service/client-api.js";
import { pagination } from "./pagination.js";

const $pagination = document.querySelector('[data-movies="pagination"]');
const moviesList = document.querySelector('[data-movies="list"]');

export const showFavorite = async () => {
  pagination.removePagination($pagination);
  const $language = document.querySelector('.nice-select');
  const languageOption = $language.children[0].innerHTML;
  const language = languageOption !== 'Português' ? 'en-US' : 'pt-BR';
  const $checkbox = document.querySelector('[data-movie="show-favorite"]');

  if (!$checkbox.classList.contains('input-chk')) {
    $checkbox.classList.add('input-chk');
    if (favoriteMovies.length === 0) {
      moviesList.innerHTML = '<p class="warning">Você não possui filmes favoritados</p>';
    } else {
      moviesList.innerHTML = '';
      favoriteMovies.forEach(async (item) => {
          const response = await clientApi.getFavoriteMovie(item, language);
          response.isFavorite = true;
          renderMovie(response);
      })
    }
  } 
  else {
    $checkbox.classList.remove('input-chk');
    moviesList.innerHTML = '';
    renderMoviesList(1, language);
  }
}