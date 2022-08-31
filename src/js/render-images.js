export { renderCardImages };

const galleryContainerImg = document.querySelector('.gallery');

function renderCardImages(images) {
  const markup = images
    .map(image => {
      const {
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `
          <div class="photo-card">
          <a class="gallery-item" href="${webformatURL}" >
  <img src="${webformatURL}" alt="${tags}" loading="lazy" class="images" />
   </a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b><br>${likes}
    </p>
    <p class="info-item">
      <b>Views</b><br>${views}
    </p>
    <p class="info-item">
      <b>Comments</b><br>${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b><br>${downloads}
    </p>
  </div>
</div> `;
    })
    .join('');

  galleryContainerImg.insertAdjacentHTML('beforeend', markup);
}
