// This file initializes the application and handles user interactions.

import { generateAnimeImage } from './animeGenerator.js';

document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-button');
    const imageContainer = document.getElementById('image-container');

    generateButton.addEventListener('click', async () => {
        const imageUrl = await generateAnimeImage();
        if (imageUrl) {
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.alt = 'Generated Anime Image';
            imageContainer.innerHTML = ''; // Clear previous images
            imageContainer.appendChild(imgElement);
        } else {
            imageContainer.innerHTML = 'Failed to generate image. Please try again.';
        }
    });
});