import { lightBox } from "../main";
import { refs } from "./refs";

export function galleryTemplate(element) {
    const {largeImageURL, webformatURL, tags, likes, views, comments, downloads} = element;
    return `
   <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
      </a>
      <ul class="gallery-body">
        <li class="gallery-info">
          <h3>Likes:</h3>
          <p>${likes}</p>
        </li>
        <li class="gallery-info">
          <h3>Views:</h3>
          <p>${views}</p>
        </li>
        <li class="gallery-info">
          <h3>Comments:</h3>
          <p>${comments}</p>
        </li>
        <li class="gallery-info">
          <h3>Downloads:</h3>
          <p>${downloads}</p>
        </li>
      </ul>
    </li>`
}

export function renderGallery(elements) {
    const markup = elements.hits.map((element)=>{return galleryTemplate(element)})
        .join('\n');
       
    refs.galleryList.insertAdjacentHTML('beforeend', markup);
    
    lightBox.refresh();   
}
