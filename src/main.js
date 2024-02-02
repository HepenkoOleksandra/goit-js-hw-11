import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// import css from "file.css";

const refs = {
    form: document.querySelector('.get-category'),
    input: document.querySelector('.query-category'),
    galleryList: document.querySelector('.gallery')
}

refs.form.addEventListener('submit', onFormSubmit);

let gallery = new SimpleLightbox('.gallery-link', {
  captionsData: "alt",
  captionDelay: 500
});


function onFormSubmit(e) {
    e.preventDefault();
 
    const query = e.target.elements.query.value.trim();
    isSameKey(query);
   
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

// Перевірка на те, чи ключове слово є те саме
function isSameKey(newKey) {
  // Отримання попереднього ключового слова, яке було використане
  const previousKey = sessionStorage.getItem('category');
  
  if (previousKey && previousKey === newKey) {
    return true; // Ключове слово є те саме
  } else {
    // Очищення вмісту галереї
    refs.galleryList.innerHTML = ''; 
    
    // Збереження нового ключового слова в sessionStorage
    sessionStorage.setItem('category', newKey);
    
    return false; // Ключове слово є новим
  }
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
    
    gallery.refresh();   
}







// Зберігаємо всі додані картинки у масиві
let addedImages = [];

// Функція, яка перевіряє, чи була додана картинка раніше
function isImageAdded(imageUrl) {
  return addedImages.includes(imageUrl);
}

// Додаємо картинку до переднього плану
function addImageToForeground(imageUrl) {
  // Перевіряємо, чи картинка не була додана раніше
  if (!isImageAdded(imageUrl)) {
    addedImages.push(imageUrl);

    // Ваш код для додавання картинки до переднього плану тут

    console.log('Картинка була успішно додана!');
  } else {
    console.log('Ця картинка вже була додана!');
  }
}

// Приклад використання
addImageToForeground('http://example.com/image1.jpg'); // Додана нова картинка
addImageToForeground('http://example.com/image2.jpg'); // Додана нова картинка
addImageToForeground('http://example.com/image1.jpg'); // Картинка вже була додана



