function fetchAnimeImage() {
    const apiUrl = 'https://api.example.com/anime-images'; // Replace with actual API endpoint
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data.imageUrl; // Adjust based on actual API response structure
        })
        .catch(error => {
            console.error('Error fetching anime image:', error);
        });
}

function displayAnimeImage(imageUrl) {
    const imageContainer = document.getElementById('anime-image-container');
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = 'Anime Image';
    imgElement.classList.add('anime-image');
    imageContainer.innerHTML = ''; // Clear previous images
    imageContainer.appendChild(imgElement);
}

export { fetchAnimeImage, displayAnimeImage };