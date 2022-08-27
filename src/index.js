import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
// import { fetchImages } from './js/fatch-images';
import NewApiService from './js/fatch-images';
import { renderCardImages } from './js/render-images';

const formSearch = document.querySelector('.search-form');
// const inputSearch = document.querySelector('input[name="searchQuery"]');
// const buttonSubmit = document.querySelector('button');
const galleryContainerImg = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

const newApiService = new NewApiService();
console.log(newApiService);
formSearch.addEventListener('submit', onSearchImages);
loadMoreBtn.addEventListener('click', onLoadMore);

function onSearchImages(e) {
  e.preventDefault();
  newApiService.query = e.currentTarget.elements.searchQuery.value.trim();
  newApiService.resetPage();
  newApiService.fetchArticles().then(renderCardImages);

  // fetchImages(name, page, perPage)
  //   .then(renderCardImages)
  //   .catch(error => {
  //     if (name !== '') {
  //       onFetchError(error);
  //     }
  //   })
  //   .finally(() => form.reset());
}

function onLoadMore() {
  newApiService.fetchArticles().then(renderCardImages);
}

// function onFetchError(error) {
//   Notiflix.Notify.warning('Oops, there is no images with that name');
// }
// function onResultSearch() {
//   Notiflix.Notify.failure(
//     'Sorry, there are no images matching your search query. Please try again.'
//   );
// }

// function onСollectionEnded() {
//   Notiflix.Notify.failure(
//     "We're sorry, but you've reached the end of search results."
//   );
// }

// function onFoundTotalHits() {
//   Notiflix.Notify.success('Hooray! We found totalHits images.');
// }

// const BASE_URL = 'https://pixabay.com/api/';
// const KEY = '29504531-9bab283f8cb4291b644273701';
// fetch(
//   `${BASE_URL}?key=${KEY}&q=cat&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
// )
//   .then(r => r.json())
//   .then(console.log);
