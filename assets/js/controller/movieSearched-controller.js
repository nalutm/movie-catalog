import { clientApi } from "../service/client-api.js";
import { renderMovie } from "../render-movie.js";
import renderMoviesList from "./moviesList-controller.js";

const showWarning = (text) => {
  return `<div class="warning">
  <p class="warning__text">${text}</p>
  <a href="#" class="warning__link" data-movies="listBack">Voltar para Lista de Filmes</a>
</div>`
}

const searchMovie = async (movieName, movieList, input) => {
  const $language = document.querySelector('.nice-select');
  const languageOption = $language.children[0].innerHTML;
  const language = languageOption !== 'Português' ? 'en-US' : 'pt-BR';
  
  const movieSearched = await clientApi.getMoviesSearched(movieName, language);
  const movies = movieSearched.results;
  movieList.innerHTML = '';

  if (movies.length === 0) {
    movieList.innerHTML = showWarning('Não encontramos resultados para esse filme');
    const $listBack = document.querySelector('[data-movies="listBack"]');
    $listBack.addEventListener('click', () => {
      input.value = '';
      renderMoviesList(1, language);
    });
  }

  movies.forEach(movie => renderMovie(movie));
}

export default searchMovie;
