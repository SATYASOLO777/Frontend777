// Sample movie list (same as the one in your home page)
const movies = [
    { 'title': 'Pirates', 'genre': 'Adventure', 'imageUrl': 'static/images/imagepoc.jpg', 'moviePath': 'static/videos/pirates.mp4','description': 'This is an adventurous film.' },
    { 'title': 'Movie 2', 'genre': 'Comedy', 'imageUrl': 'static/images/movie2.jpg', 'moviePath': 'static/videos/movie2.mp4' },
    { 'title': 'Movie 3', 'genre': 'Drama', 'imageUrl': 'static/images/movie3.jpg', 'moviePath': 'static/videos/movie3.mp4' },
    { 'title': 'Movie 4', 'genre': 'Horror', 'imageUrl': 'static/images/movie4.jpg', 'moviePath': 'static/videos/movie4.mp4' },
    { 'title': 'Movie 5', 'genre': 'Adventure', 'imageUrl': 'static/images/movie5.jpg', 'moviePath': 'static/videos/movie5.mp4' }
];

async function getMovieDetails() {
    const movieId = parseInt(new URLSearchParams(window.location.search).get('id'), 10);
    
    const response = await fetch(`https://backend777.onrender.com/api/movies/${movieId}`);
    const movie = await response.json();

    if (movie) {
        const detailsContainer = document.getElementById('movie-details');
        detailsContainer.innerHTML = `
            <div class="movie-details-container">
                <img src="${movie.imageUrl}" alt="${movie.title}" class="movie-image">
                <div class="movie-info">
                    <h2>${movie.title}</h2>
                    <p>${movie.description}</p>
                    <div class="button-container">
                        <a href="${movie.moviePath}" target="_blank"><button>Watch</button></a>
                        <a href="${movie.moviePath}" download><button>Download</button></a>
                    </div>
                </div>
            </div>
        `;
    } else {
        alert('Movie not found');
    }
}


window.onload = getMovieDetails;


// Function to display movie details
function displayMovieDetails() {
    const movie = movies[movieId];  // Get the movie by ID
    const movieDetailsSection = document.getElementById('movie-details');
    
    movieDetailsSection.innerHTML = `
        <img src="${movie.imageUrl}" alt="${movie.title}" class="thumbnail">
        <h2>${movie.title}</h2>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Description:</strong> ${movie.description}</p>
        <button onclick="watchMovie('${movie.moviePath}')">Watch Now</button>
        <button onclick="downloadMovie('${movie.moviePath}')">Download</button>
    `;
}

// Call the function to display movie details when the page loads
displayMovieDetails();
