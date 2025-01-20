async function filterMovies() {
    try {
        const searchInput = document.getElementById('search').value.toLowerCase();
        const genreFilter = document.getElementById('genre-filter').value;
        const response = await fetch(`https://backend777.onrender.com/api/movies?search=${searchInput}&genre=${genreFilter}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const filteredMovies = await response.json();
        displayMovies(filteredMovies);
    } catch (error) {
        console.error('Failed to fetch movies:', error);
    }
}
const movies = [
    { 'title': 'Pirates', 'genre': 'Adventure', 'imageUrl': 'static/images/imagepoc.jpg', 'moviePath': 'static/videos/pirates.mp4' },
    { 'title': 'Movie 2', 'genre': 'Comedy', 'imageUrl': 'static/images/movie2.jpg', 'moviePath': 'static/videos/movie2.mp4' },
    { 'title': 'Movie 3', 'genre': 'Drama', 'imageUrl': 'static/images/movie3.jpg', 'moviePath': 'static/videos/movie3.mp4' },
    { 'title': 'Movie 4', 'genre': 'Horror', 'imageUrl': 'static/images/movie4.jpg', 'moviePath': 'static/videos/movie4.mp4' },
    { 'title': 'Movie 5', 'genre': 'Adventure', 'imageUrl': 'static/images/movie5.jpg', 'moviePath': 'static/videos/movie5.mp4' }
];
function displayMovies(movieList) {
    const movieGrid = document.getElementById('movie-grid');
    movieGrid.innerHTML = '';  // Clear the grid before displaying updated movies
    movieList.forEach((movie, index) => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        // Add movie details and set link to movie detail page
        movieCard.innerHTML = `
            <a href="movieDetails.html?id=${index}">
                <img src="${movie.imageUrl}" alt="${movie.title}" class="thumbnail">
            </a>
            <h3>${movie.title}</h3>
            <p>${movie.genre}</p>
        `;
        movieGrid.appendChild(movieCard);
    });
}
function watchMovie(title) {
    window.location.href = `/watch?title=${encodeURIComponent(title)}`;
}
function downloadMovie(title) {
    window.location.href = `/download?title=${encodeURIComponent(title)}`;
}
// Initial load
window.onload = () => {
    filterMovies();
};
