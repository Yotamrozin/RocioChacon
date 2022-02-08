let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0.5
}

//add thumbnail and thumbnailAnimation classes to images
let imageThumbnails = document.querySelector('.image-gallery');
let singleImages = imageThumbnails.getElementsByTagName("img");
for (i = 0; i < singleImages.length; i++) {
    singleImages[i].className += "thumbnail thumbnailAnimation";
    console.log(singleImages[i]);
}


// Remove the transition class
const allThumbnail = document.querySelectorAll('.thumbnail');
allThumbnail.forEach(thumbnail => {
    thumbnail.classList.remove('thumbnailAnimation');
    thumbnail.classList.remove('thumbnailAnimation');
});

whenVisible = entries => {
    entries.forEach(entry => {
        allThumbnail.forEach(thumbnail => {
            if (entry.isIntersecting) {
                thumbnail.classList.add('thumbnailAnimation');
                return;
            }

            thumbnail.classList.remove('thumbnailAnimation');
        })
    });
}


// Create the observer, same as before:
const observer = new IntersectionObserver(whenVisible, options);
observer.observe(document.querySelector('.image-gallery'));



// const singleThumbnail = document.querySelector('.thumbnail');
// console.log(singleThumbnail);
// singleThumbnail.classList.remove('thumbnailAnimation');

// whenVisible = function (entries) {
//     //loop over thumbnail in the class
//     entries.forEach(entry => {
//         console.log(entry);
//         //check if thumbnail is visible
//         if (entry.isIntersecting) {
//             //add animation class
//             entry.target.querySelector('img').classList.add('thumbnailAnimation');

//             console.log(entry.target.querySelector('img').classList);
//             return;
//         }

//     });
// }

// const observer = new IntersectionObserver(whenVisible, options);
// observer.observe(document.querySelector('.imageGallery'));