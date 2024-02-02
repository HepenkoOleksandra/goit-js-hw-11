import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
// import css from "file.css";

const refs = {
    form: document.querySelector('.get-category'),
    input: document.querySelector('.query-category'),
    galleryList: document.querySelector('.gallery')
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  
    refs.galleryList.innerHTML = ''; // подумати
       
    e.preventDefault();
 
    const query = e.target.elements.query.value.trim();
    
if (query === '') {
        alert('Please enter a category name'); // iziToast 
        return;
    }

    getGallery(query).then(data => { 
        if (data.hits.length === 0) {
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                messageColor: 'green',
                backgroundColor: '#e3f2ff',
                position: 'topRight',
            });
        } else {
            renderGallery(data);
        }
        
    });

    e.target.reset();
}

function getGallery(category) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const PARAMS = new URLSearchParams({
        key: "42112521-3ff4dfc201bab0977369cd2bc",
        q: `${category}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });
    const url = `${BASE_URL}${END_POINT}?${PARAMS}`;

   return fetch(url).then(res => res.json());
   
}


function galleryTemplate(element) {
    const {largeImageURL, webformatURL, tags, likes, views, comments, downloads} = element;
    return `
   <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="gallery-body">
            <p class="gallery-info">Likes: ${likes}</p>
            <p class="gallery-info">Views: ${views}</p>
            <p class="gallery-info">Comments: ${comments}</p>
            <p class="gallery-info">Downloads: ${downloads}</p>
        </div>
    </li>`
}

function renderGallery(elements) {
    const markup = elements.hits.map((element)=>{return galleryTemplate(element)})
        .join('\n');
       
    refs.galleryList.insertAdjacentHTML('beforeend', markup);
}






