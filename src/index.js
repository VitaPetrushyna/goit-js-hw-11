import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import { fetchImages } from './js/fatch-images';
import { renderCardImages } from './js/render-images';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formSearch = document.querySelector('.search-form');
const buttonSubmit = document.querySelector('.button-form');
const galleryContainerImg = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;
const perPage = 40;

formSearch.addEventListener('submit', onSearchImages);
loadMoreBtn.addEventListener('click', onLoadMore);

loadMoreBtn.style.display = 'none';

function onSearchImages(e) {
  e.preventDefault();

  query = e.currentTarget.elements.searchQuery.value.trim();

  loadMoreBtn.style.display = 'none';
  // buttonSubmit.disabled = true;

  page = 1;
  clearImagesContainer();

  if (query === '') {
    onResultSearchError();
    return;
  }

  fetchImages(query, page, perPage).then(({ data }) => {
    if (data.totalHits === 0) {
      onResultSearchError();
    } else {
      buttonSubmit.disabled = false;
      onFoundTotalHits(data);
      renderCardImages(data.hits);
      const lightbox = new SimpleLightbox('.gallery a').refresh();
      loadMoreBtn.style.display = 'block';

      page += 1;
    }
  });
}

function onLoadMore() {
  fetchImages(query, page, perPage).then(({ data }) => {
    renderCardImages(data.hits);
    const lightbox = new SimpleLightbox('.gallery a').refresh();
    page += 1;

    const totalPage = data.hits / perPage;
    console.log(totalPage);
    if (page > totalPage) {
      loadMoreBtn.style.display = 'none';
      onСollectionEnded();
    }
  });
}

function clearImagesContainer() {
  galleryContainerImg.innerHTML = '';
}

function onResultSearchError() {
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function onСollectionEnded() {
  Notiflix.Notify.info(
    "We're sorry, but you've reached the end of search results."
  );
}

function onFoundTotalHits(data) {
  Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
}

// ------ Через класс (не доделано) -------
// fetchImages(name, page, perPage)
//   .then(renderCardImages)
//   .catch(error => {
//     if (name !== '') {
//       onFetchError(error);
//     }
//   })
//   .finally(() => form.reset());

// const newApiService = new NewApiService();
// console.log(newApiService);

// formSearch.addEventListener('submit', onSearchImages);
// loadMoreBtn.addEventListener('click', onLoadMore);

// loadMoreBtn.style.display = 'none';

// function onSearchImages(e) {
//   e.preventDefault();

//   newApiService.query = e.currentTarget.elements.searchQuery.value.trim();

//   if (newApiService.query === '') {
//     onResultSearchError();
//     return;
//   }

//   clearImagesContainer();
//   newApiService.resetPage();
//   loadMoreBtn.style.display = 'block';

//   newApiService.fetchArticles().then(images => {
//     renderCardImages(images);
//   });
// }
