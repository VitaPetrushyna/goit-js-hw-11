import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import { fetchImages } from './js/fatch-images';
import { renderCardImages } from './js/render-images';

const inputSearch = document.querySelector('input[name="searchQuery"]');
const button = document.querySelector('button');
const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

let name = '';
const page = 1;
const perPage = 40;

form.addEventListener('submit', onRequestProgress);

function onRequestProgress(e) {
  e.prevenDefault();
  name = e.currentTarget.elements.searchQuery.value.trim();
  fetchImages(name, page, perPage)
    .then(renderCardImages)
    .catch(error => {
      if (name !== '') {
        onFetchError(error);
      }
    })
    .finally(() => form.reset());
}

function onFetchError(error) {
  Notiflix.Notify.warning('Oops, there is no images with that name');
}
function onResultSearch() {
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function onСollectionEnded() {
  Notiflix.Notify.failure(
    "We're sorry, but you've reached the end of search results."
  );
}

function onFoundTotalHits() {
  Notiflix.Notify.success('Hooray! We found totalHits images.');
}
