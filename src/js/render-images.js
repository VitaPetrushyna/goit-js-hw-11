export { renderCardImages };

const galleryContainerImg = document.querySelector('.gallery');

function renderCardImages(images) {
  const markup = images
    .map(({ webformatURL, tags, likes, views, comments, downloads }) => {
      return `
          <div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" width="320" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${likes}
    </p>
    <p class="info-item">
      <b>Views</b>${views}
    </p>
    <p class="info-item">
      <b>Comments</b>${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>${downloads}
    </p>
  </div>
</div> `;
    })
    .join('');

  galleryContainerImg.insertAdjacentHTML('beforeend', markup);
}
