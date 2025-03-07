import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    const movieLink = document.querySelector('a[href^="/movies/"]');
    // Create an anchor <a> tag to make the whole card clickable
    const link = document.createElement('a');
    link.className = 'movie-card-link';
    if (movieLink) {
      const movieUrl = movieLink.href;
      const movieName = movieUrl.split('/movies/')[1].replace('/', '');
      link.href = movieUrl;
      link.setAttribute('aria-label', movieName);
    }

    while (row.firstElementChild) {
      link.append(row.firstElementChild);
    }

    [...link.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'movie-cards-card-image';
      } else {
        div.className = 'movie-cards-card-body';
      }
    });

    li.append(link);
    ul.append(li);
  });

  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}
