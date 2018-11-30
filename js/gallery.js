'use strict';

let currentPhoto = document.getElementById('currentPhoto');
let prevPhoto = document.getElementById('prevPhoto');
let nextPhoto = document.getElementById('nextPhoto');

let photosForGallery = [
'https://netology-code.github.io/hj-homeworks/browser/gallery/i/breuer-building.jpg',
'https://netology-code.github.io/hj-homeworks/browser/gallery/i/guggenheim-museum.jpg',
'https://netology-code.github.io/hj-homeworks/browser/gallery/i/headquarters.jpg',
'https://netology-code.github.io/hj-homeworks/browser/gallery/i/IAC.jpg',
'https://netology-code.github.io/hj-homeworks/browser/gallery/i/new-museum.jpg'
];

let i = 0;

const stepUp = () => {
	if ( i < photosForGallery.length - 1 ) {
		i++;
	}
	else {
		i = 0;
	}
	currentPhoto.src = photosForGallery[i];
}

const stepDown = () => {
	if ( i > 0 ) {
		i--;
	}
	else {
		i = photosForGallery.length - 1;
	}
	currentPhoto.src = photosForGallery[i];
}

currentPhoto.src = photosForGallery[0];

prevPhoto.addEventListener( 'click', stepUp );
nextPhoto.addEventListener( 'click', stepDown );