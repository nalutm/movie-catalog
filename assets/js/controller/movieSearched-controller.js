import { clientApi } from "../service/client-api.js";
import { renderMovie } from "../render-movie.js";
import { pagination } from "../pagination.js";
import renderMoviesList from "./moviesList-controller.js";

const showWarning = (text) => {
  return `<div class="warning">
  <p class="warning__text">${text}</p>
  <a href="#" class="warning__link" data-movies="listBack">Voltar para Lista de Filmes</a>
</div>`
}

const searchMovie = async (movieName, movieList, $pagination, input) => {
  const movieSearched = await clientApi.getMoviesSearched(movieName);
  const movies = movieSearched.results;
  movieList.innerHTML = '';
  const $language = document.querySelector('.nice-select');
  const language = $language.children[0].innerHTML;

  if (movies.length === 0) {
    movieList.innerHTML = showWarning('Não encontramos resultados para esse filme');
    const $listBack = document.querySelector('[data-movies="listBack"]');
    $listBack.addEventListener('click', () => {
      input.value = '';
      if (language === 'Português') renderMoviesList(1, 'pt-BR');
      if (language === 'English') renderMoviesList(1, 'en-US');
    });
  }
  movies.forEach(movie => renderMovie(movie)); 
  pagination.removePagination($pagination);
}

export default searchMovie;
