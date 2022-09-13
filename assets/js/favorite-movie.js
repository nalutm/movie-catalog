export const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || []; 

export function favoriteMovie(evt) {
  const $heartIcon = this.querySelector('[data-movie="favorite"]');
  const heartIconSrc = './assets/img/heart-icon.svg';
  const heartFullIconSrc = './assets/img/heart-full-icon.svg';

  changeFavoriteIcon($heartIcon, heartIconSrc, heartFullIconSrc);
  saveFavoriteMovieInfo(evt, $heartIcon, heartFullIconSrc);
};

function changeFavoriteIcon(heartIcon, heartIconSrc, heartFullIconSrc) {
  let isFavorite = heartIcon.getAttribute('src') === heartFullIconSrc;
  
  if (isFavorite) heartIcon.setAttribute('src', heartIconSrc);
  else heartIcon.setAttribute('src', heartFullIconSrc);

}

function saveFavoriteMovieInfo(evt, heartIcon, heartFullIconSrc) {
  let isFavorite = heartIcon.getAttribute('src') === heartFullIconSrc;
  const $movie = evt.currentTarget.parentElement.parentElement.parentElement;
  const $label = evt.currentTarget.children[1];

  if (isFavorite) saveAsFavorite($movie, $label);
  else disfavor($movie, $label); 
}

function saveAsFavorite(movie, label) {
  label.innerHTML = 'Desfavoritar';
  const id = movie.getAttribute('id');

  favoriteMovies.push(id);
  localStorage.setItem('favoriteMovies', JSON.stringify(Array.from(favoriteMovies)));
}

function disfavor(movie, label) {
  label.innerHTML = 'Favoritar';
  const id = movie.getAttribute('id');
  favoriteMovies.splice(favoriteMovies.findIndex(item => item == id), 1);
  localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
}
