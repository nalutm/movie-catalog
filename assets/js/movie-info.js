import { createContainer } from "./container.js";
import { favoriteMovie } from "./favorite-movie.js";
import { createImg } from "./movie-poster.js";

const createMovieTitle = (title, year) => {
  const $movieTitle = document.createElement('h2');
  $movieTitle.classList.add('movie__info-title');
  if (year !== '') $movieTitle.innerHTML = `${title} (${year})`;
  else $movieTitle.innerHTML = `${title}`;

  return $movieTitle;
}

const createRatingInfo = (rating) => {
  const starIcon = createImg('./assets/img/star-icon.svg', 'Estrela');
  const $rating = document.createElement('span');
  $rating.innerHTML = `${rating}`;
  const $starImageContainer = createContainer('starIconImgContainer', 'icon__img-container', starIcon);

  return createContainer('starIconContainer', 'icon-container', $starImageContainer, $rating)
}


const creatFavoriteInfo = (isFavorite) => {
  const $favorite = document.createElement('span');
  let $heartIcon
  
  if (isFavorite) {
    $heartIcon = createImg('./assets/img/heart-full-icon.svg', 'Coração');
    $favorite.innerHTML = 'Desfavoritar';
    
  } else {
    $heartIcon = createImg('./assets/img/heart-icon.svg', 'Coração');
    $favorite.innerHTML = 'Favoritar';
  }
  
  $heartIcon.setAttribute('data-movie', 'favorite');
  const $heartImageContainer = createContainer('heartIconImgContainer', 'icon__img-container', $heartIcon);
  const $heartIconContainer = createContainer('starIconContainer', 'icon-container', $heartImageContainer, $favorite);
  $heartIconContainer.addEventListener('click', favoriteMovie);

  return $heartIconContainer;
}

const createMovieInfoIcons = (rating, isFavorited) => {
  const $movieInfoIcons = document.createElement('div');
  $movieInfoIcons.classList.add('movie__info-icons');

  $movieInfoIcons.appendChild(createRatingInfo(rating));
  $movieInfoIcons.appendChild(creatFavoriteInfo(isFavorited));

  return $movieInfoIcons;
}

export const createMovieInfo = (title, year, rating, isFavorited) => {
  const $movieInfo = document.createElement('div');
  $movieInfo.classList.add('movie__info');

  $movieInfo.appendChild(createMovieTitle(title, year));
  $movieInfo.appendChild(createMovieInfoIcons(rating, isFavorited));

  return $movieInfo;
}
